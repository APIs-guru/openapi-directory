
__doc__ = """ SDK Documentation: https://www.api2pdf.com - Find out more about Api2Pdf"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://v2018.api2pdf.com",
]


class SDK:
    r"""SDK Documentation: https://www.api2pdf.com - Find out more about Api2Pdf"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def chrome_from_html_post(self, request: operations.ChromeFromHTMLPostRequest) -> operations.ChromeFromHTMLPostResponse:
        r"""Convert raw HTML to PDF
        Convert HTML to a PDF using Headless Chrome on AWS Lambda.
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chrome/html"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromeFromHTMLPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def chrome_from_url_get(self, request: operations.ChromeFromURLGetRequest) -> operations.ChromeFromURLGetResponse:
        r"""Convert URL to PDF
        Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
        ### Authorize via Query String Parameter
        **apikey=YOUR-API-KEY**
        ### Example
        ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chrome/url"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromeFromURLGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
            if utils.match_content_type(content_type, "application/pdf"):
                res.chrome_from_url_get_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def chrome_from_url_post(self, request: operations.ChromeFromURLPostRequest) -> operations.ChromeFromURLPostResponse:
        r"""Convert URL to PDF
        Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chrome/url"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromeFromURLPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def libre_convert_post(self, request: operations.LibreConvertPostRequest) -> operations.LibreConvertPostResponse:
        r"""Convert office document or image to PDF
        Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/libreoffice/convert"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LibreConvertPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def merge_post(self, request: operations.MergePostRequest) -> operations.MergePostResponse:
        r"""Merge multiple PDFs together
        Merge two or more PDFs together on AWS Lambda.
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/merge"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MergePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def wkhtmltopdf_from_html_post(self, request: operations.WkhtmltopdfFromHTMLPostRequest) -> operations.WkhtmltopdfFromHTMLPostResponse:
        r"""Convert raw HTML to PDF
        Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wkhtmltopdf/html"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WkhtmltopdfFromHTMLPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def wkhtmltopdf_from_url_get(self, request: operations.WkhtmltopdfFromURLGetRequest) -> operations.WkhtmltopdfFromURLGetResponse:
        r"""Convert URL to PDF
        Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
        ### Authorize via Query String Parameter
        **apikey=YOUR-API-KEY**
        ### Example
        ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wkhtmltopdf/url"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WkhtmltopdfFromURLGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
            if utils.match_content_type(content_type, "application/pdf"):
                res.wkhtmltopdf_from_url_get_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def wkhtmltopdf_from_url_post(self, request: operations.WkhtmltopdfFromURLPostRequest) -> operations.WkhtmltopdfFromURLPostResponse:
        r"""Convert URL to PDF
        Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/wkhtmltopdf/url"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WkhtmltopdfFromURLPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def zebra_get(self, request: operations.ZebraGetRequest) -> operations.ZebraGetResponse:
        r"""Generate bar codes and QR codes with ZXING.
        See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
        ### Authorize via Query String Parameter
        **apikey=YOUR-API-KEY**
        ### Example
        ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/zebra"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ZebraGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/png"):
                res.zebra_get_200_image_png_binary_string = r.content

        return res

    