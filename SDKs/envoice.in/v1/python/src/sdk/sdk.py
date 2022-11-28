

import requests
from typing import List,Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://www.envoice.in",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def client_api_all(self, request: operations.ClientAPIAllRequest) -> operations.ClientAPIAllResponse:
        r"""Return all clients for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/client/all"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientDetailsAPIModel]])
                res.client_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ClientDetailsAPIModel]])
                res.client_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def client_api_can_delete(self, request: operations.ClientAPICanDeleteRequest) -> operations.ClientAPICanDeleteResponse:
        r"""Check if the provided client can be deleted
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/client/candelete"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientAPICanDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.client_api_can_delete_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.client_api_can_delete_200_text_json_boolean = out

        return res

    
    def client_api_delete(self, request: operations.ClientAPIDeleteRequest) -> operations.ClientAPIDeleteResponse:
        r"""Delete an existing client
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/client/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.client_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.client_api_delete_200_text_json_int32_integer = out

        return res

    
    def client_api_details(self, request: operations.ClientAPIDetailsRequest) -> operations.ClientAPIDetailsResponse:
        r"""Return client details. Activities and invoices included.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/client/details"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientAPIDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientDetailsAPIModel])
                res.client_details_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClientDetailsAPIModel])
                res.client_details_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def estimation_api_all(self, request: operations.EstimationAPIAllRequest) -> operations.EstimationAPIAllResponse:
        r"""Return all estimation for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/all"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultEstimationDetailsAPIModel])
                res.list_result_estimation_details_api_model_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultEstimationDetailsAPIModel])
                res.list_result_estimation_details_api_model_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def estimation_api_change_status(self, request: operations.EstimationAPIChangeStatusRequest) -> operations.EstimationAPIChangeStatusResponse:
        r"""Change estimation status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/changestatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPIChangeStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.estimation_api_change_status_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.estimation_api_change_status_200_text_json_boolean = out

        return res

    
    def estimation_api_delete(self, request: operations.EstimationAPIDeleteRequest) -> operations.EstimationAPIDeleteResponse:
        r"""Delete an existing estimation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.estimation_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.estimation_api_delete_200_text_json_int32_integer = out

        return res

    
    def estimation_api_details(self, request: operations.EstimationAPIDetailsRequest) -> operations.EstimationAPIDetailsResponse:
        r"""Return estimation data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/details"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPIDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EstimationFullDetailsAPIModel])
                res.estimation_full_details_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EstimationFullDetailsAPIModel])
                res.estimation_full_details_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def estimation_api_send_to_client(self, request: operations.EstimationAPISendToClientRequest) -> operations.EstimationAPISendToClientResponse:
        r"""Send the provided estimation to the client
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/sendtoclient"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPISendToClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.estimation_api_send_to_client_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.estimation_api_send_to_client_200_text_json_int32_integer = out

        return res

    
    def estimation_api_status(self, request: operations.EstimationAPIStatusRequest) -> operations.EstimationAPIStatusResponse:
        r"""Retrieve the status of the estimation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/status"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPIStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EstimationAPIStatus200ApplicationJSONEnum])
                res.estimation_api_status_200_application_json_string_enum = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EstimationAPIStatus200TextJSONEnum])
                res.estimation_api_status_200_text_json_string_enum = out

        return res

    
    def estimation_api_uri(self, request: operations.EstimationAPIURIRequest) -> operations.EstimationAPIURIResponse:
        r"""Return the unique url to the client's invoice
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/estimation/uri"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EstimationAPIURIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EstimationURIAPIModel])
                res.estimation_uri_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EstimationURIAPIModel])
                res.estimation_uri_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_api_invoice_allcategories(self, request: operations.GetAPIInvoiceAllcategoriesRequest) -> operations.GetAPIInvoiceAllcategoriesResponse:
        r"""Return all invoice categories for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/allcategories"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIInvoiceAllcategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultInvoiceCategoryAPIModel])
                res.list_result_invoice_category_api_model_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultInvoiceCategoryAPIModel])
                res.list_result_invoice_category_api_model_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def general_api_countries(self, request: operations.GeneralAPICountriesRequest) -> operations.GeneralAPICountriesResponse:
        r"""Return all of the platform supported countries
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/general/countries"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GeneralAPICountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CountryDetailsAPIModel]])
                res.country_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CountryDetailsAPIModel]])
                res.country_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def general_api_currencies(self, request: operations.GeneralAPICurrenciesRequest) -> operations.GeneralAPICurrenciesResponse:
        r"""Return all of the platform supported currencies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/general/currencies"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GeneralAPICurrenciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CurrencyDetailsAPIModel]])
                res.currency_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CurrencyDetailsAPIModel]])
                res.currency_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def general_api_date_formats(self, request: operations.GeneralAPIDateFormatsRequest) -> operations.GeneralAPIDateFormatsResponse:
        r"""Return all of the platform supported Date Formats
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/general/dateformats"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GeneralAPIDateFormatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.general_api_date_formats_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.general_api_date_formats_200_text_json_strings = out

        return res

    
    def general_api_ui_languages(self, request: operations.GeneralAPIUILanguagesRequest) -> operations.GeneralAPIUILanguagesResponse:
        r"""Return all of the platform supported UI languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/general/uilanguages"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GeneralAPIUILanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UILanguageDetailsAPIModel]])
                res.ui_language_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UILanguageDetailsAPIModel]])
                res.ui_language_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def invoice_api_all(self, request: operations.InvoiceAPIAllRequest) -> operations.InvoiceAPIAllResponse:
        r"""Return all invoices for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/all"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultInvoiceDetailsAPIModel])
                res.list_result_invoice_details_api_model_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultInvoiceDetailsAPIModel])
                res.list_result_invoice_details_api_model_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def invoice_api_change_status(self, request: operations.InvoiceAPIChangeStatusRequest) -> operations.InvoiceAPIChangeStatusResponse:
        r"""Change invoice status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/changestatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPIChangeStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.invoice_api_change_status_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.invoice_api_change_status_200_text_json_boolean = out

        return res

    
    def invoice_api_delete(self, request: operations.InvoiceAPIDeleteRequest) -> operations.InvoiceAPIDeleteResponse:
        r"""Delete an existing invoice
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.invoice_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.invoice_api_delete_200_text_json_int32_integer = out

        return res

    
    def invoice_api_details(self, request: operations.InvoiceAPIDetailsRequest) -> operations.InvoiceAPIDetailsResponse:
        r"""Return invoice data
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/details"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPIDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceFullDetailsAPIModel])
                res.invoice_full_details_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceFullDetailsAPIModel])
                res.invoice_full_details_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def invoice_api_send_to_accountant(self, request: operations.InvoiceAPISendToAccountantRequest) -> operations.InvoiceAPISendToAccountantResponse:
        r"""Send the provided invoice to the accountant
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/sendtoaccountant"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPISendToAccountantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.invoice_api_send_to_accountant_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.invoice_api_send_to_accountant_200_text_json_int32_integer = out

        return res

    
    def invoice_api_send_to_client(self, request: operations.InvoiceAPISendToClientRequest) -> operations.InvoiceAPISendToClientResponse:
        r"""Send the provided invoice to the client
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/sendtoclient"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPISendToClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.invoice_api_send_to_client_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.invoice_api_send_to_client_200_text_json_int32_integer = out

        return res

    
    def invoice_api_status(self, request: operations.InvoiceAPIStatusRequest) -> operations.InvoiceAPIStatusResponse:
        r"""Retrieve the status of the invoice
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/status"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPIStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.InvoiceAPIStatus200ApplicationJSONEnum])
                res.invoice_api_status_200_application_json_string_enum = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.InvoiceAPIStatus200TextJSONEnum])
                res.invoice_api_status_200_text_json_string_enum = out

        return res

    
    def invoice_api_uri(self, request: operations.InvoiceAPIURIRequest) -> operations.InvoiceAPIURIResponse:
        r"""Return the unique url to the client's invoice
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/uri"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InvoiceAPIURIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceURIAPIModel])
                res.invoice_uri_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceURIAPIModel])
                res.invoice_uri_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def order_api_all(self, request: operations.OrderAPIAllRequest) -> operations.OrderAPIAllResponse:
        r"""Return all orders for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/order/all"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultOrderDetailsAPIModel])
                res.list_result_order_details_api_model_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultOrderDetailsAPIModel])
                res.list_result_order_details_api_model_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def order_api_change_shipping_details(self, request: operations.OrderAPIChangeShippingDetailsRequest) -> operations.OrderAPIChangeShippingDetailsResponse:
        r"""Change order shipping details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/order/changeshippingdetails"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderAPIChangeShippingDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def order_api_change_status(self, request: operations.OrderAPIChangeStatusRequest) -> operations.OrderAPIChangeStatusResponse:
        r"""Change order status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/order/changestatus"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderAPIChangeStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def order_api_delete(self, request: operations.OrderAPIDeleteRequest) -> operations.OrderAPIDeleteResponse:
        r"""Delete an existing order
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/order/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.order_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.order_api_delete_200_text_json_int32_integer = out

        return res

    
    def order_api_details(self, request: operations.OrderAPIDetailsRequest) -> operations.OrderAPIDetailsResponse:
        r"""Return order details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/order/details"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrderAPIDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderFullDetailsAPIModel])
                res.order_full_details_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderFullDetailsAPIModel])
                res.order_full_details_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_api_invoice_deletecategory(self, request: operations.PostAPIInvoiceDeletecategoryRequest) -> operations.PostAPIInvoiceDeletecategoryResponse:
        r"""Delete an existing invoice category
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/deletecategory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIInvoiceDeletecategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.post_api_invoice_deletecategory_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.post_api_invoice_deletecategory_200_text_json_int32_integer = out

        return res

    
    def post_api_invoice_newcategory(self, request: operations.PostAPIInvoiceNewcategoryRequest) -> operations.PostAPIInvoiceNewcategoryResponse:
        r"""Create an invoice category
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/newcategory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIInvoiceNewcategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceCategoryAPIModel])
                res.invoice_category_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceCategoryAPIModel])
                res.invoice_category_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def post_api_invoice_updatecategory(self, request: operations.PostAPIInvoiceUpdatecategoryRequest) -> operations.PostAPIInvoiceUpdatecategoryResponse:
        r"""Update an existing invoice category
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/invoice/updatecategory"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAPIInvoiceUpdatecategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceCategoryAPIModel])
                res.invoice_category_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvoiceCategoryAPIModel])
                res.invoice_category_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def payment_api_supported(self, request: operations.PaymentAPISupportedRequest) -> operations.PaymentAPISupportedResponse:
        r"""Return all supported payment gateways (no currencies means all are supported)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/payment/supported"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentAPISupportedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PaymentGatewayDetailsAPIModel]])
                res.payment_gateway_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PaymentGatewayDetailsAPIModel]])
                res.payment_gateway_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def payment_link_api_all(self, request: operations.PaymentLinkAPIAllRequest) -> operations.PaymentLinkAPIAllResponse:
        r"""Create a payment link
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/paymentlink/all"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentLinkAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultPaymentLink])
                res.list_result_payment_link_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultPaymentLink])
                res.list_result_payment_link_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def payment_link_api_uri(self, request: operations.PaymentLinkAPIURIRequest) -> operations.PaymentLinkAPIURIResponse:
        r"""Return the unique url to the client's payment link
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/paymentlink/uri"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentLinkAPIURIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentLinkURIAPIModel])
                res.payment_link_uri_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentLinkURIAPIModel])
                res.payment_link_uri_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def product_api_all(self, request: operations.ProductAPIAllRequest) -> operations.ProductAPIAllResponse:
        r"""Return all products for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/product/all"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultProductDetailsAPIModel])
                res.list_result_product_details_api_model_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListResultProductDetailsAPIModel])
                res.list_result_product_details_api_model_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def product_api_delete(self, request: operations.ProductAPIDeleteRequest) -> operations.ProductAPIDeleteResponse:
        r"""Delete an existing product
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/product/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.product_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.product_api_delete_200_text_json_int32_integer = out

        return res

    
    def product_api_details(self, request: operations.ProductAPIDetailsRequest) -> operations.ProductAPIDetailsResponse:
        r"""Return product details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/product/details"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ProductAPIDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductFullDetailsAPIModel])
                res.product_full_details_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductFullDetailsAPIModel])
                res.product_full_details_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def tax_api_all(self, request: operations.TaxAPIAllRequest) -> operations.TaxAPIAllResponse:
        r"""Return all taxes for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tax/all"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TaxDetailsAPIModel]])
                res.tax_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TaxDetailsAPIModel]])
                res.tax_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def tax_api_delete(self, request: operations.TaxAPIDeleteRequest) -> operations.TaxAPIDeleteResponse:
        r"""Delete an existing tax
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tax/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.tax_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.tax_api_delete_200_text_json_int32_integer = out

        return res

    
    def tax_api_new(self, request: operations.TaxAPINewRequest) -> operations.TaxAPINewResponse:
        r"""Create a tax
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tax/new"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxAPINewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.tax_api_new_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.tax_api_new_200_text_json_int32_integer = out

        return res

    
    def tax_api_update(self, request: operations.TaxAPIUpdateRequest) -> operations.TaxAPIUpdateResponse:
        r"""Update an existing tax
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/tax/update"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TaxAPIUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def work_type_api_all(self, request: operations.WorkTypeAPIAllRequest) -> operations.WorkTypeAPIAllResponse:
        r"""Return all work types for the account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/worktype/all"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkTypeAPIAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WorkTypeDetailsAPIModel]])
                res.work_type_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WorkTypeDetailsAPIModel]])
                res.work_type_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def work_type_api_delete(self, request: operations.WorkTypeAPIDeleteRequest) -> operations.WorkTypeAPIDeleteResponse:
        r"""Delete an existing work type
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/worktype/delete"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkTypeAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.work_type_api_delete_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.work_type_api_delete_200_text_json_int32_integer = out

        return res

    
    def work_type_api_details(self, request: operations.WorkTypeAPIDetailsRequest) -> operations.WorkTypeAPIDetailsResponse:
        r"""Return work type details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/worktype/details"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkTypeAPIDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkTypeDetailsAPIModel])
                res.work_type_details_api_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkTypeDetailsAPIModel])
                res.work_type_details_api_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def work_type_api_new(self, request: operations.WorkTypeAPINewRequest) -> operations.WorkTypeAPINewResponse:
        r"""Create a work type
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/worktype/new"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkTypeAPINewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.work_type_api_new_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.work_type_api_new_200_text_json_int32_integer = out

        return res

    
    def work_type_api_search(self, request: operations.WorkTypeAPISearchRequest) -> operations.WorkTypeAPISearchResponse:
        r"""Return all work types for the account that match the query param
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/worktype/search"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkTypeAPISearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WorkTypeDetailsAPIModel]])
                res.work_type_details_api_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.WorkTypeDetailsAPIModel]])
                res.work_type_details_api_models = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/html"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def work_type_api_update(self, request: operations.WorkTypeAPIUpdateRequest) -> operations.WorkTypeAPIUpdateResponse:
        r"""Update an existing work type
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/worktype/update"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WorkTypeAPIUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    