import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class V1VatVerification:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def vat_basic(self, request: operations.VatBasicRequest) -> operations.VatBasicResponse:
        r"""Returns a verification result
        Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/vat-verification/basic-check/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VatBasicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_basic_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_basic_default_application_json_any = out

        return res

    
    def vat_comprehensive(self, request: operations.VatComprehensiveRequest) -> operations.VatComprehensiveResponse:
        r"""Returns a verification result and company data
        Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/vat-verification/comprehensive-check/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VatComprehensiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_comprehensive_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_comprehensive_default_application_json_any = out

        return res

    
    def vat_level_two(self, request: operations.VatLevelTwoRequest) -> operations.VatLevelTwoResponse:
        r"""Returns a level two verification result
        Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/vat-verification/leveltwo-check/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VatLevelTwoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_level_two_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_level_two_default_application_json_any = out

        return res

    
    def vat_lookup(self, request: operations.VatLookupRequest) -> operations.VatLookupResponse:
        r"""Returns a list of vat numbers with additional data
        Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v1/vat-verification/lookup/{country}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VatLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_lookup_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.vat_lookup_default_application_json_any = out

        return res

    