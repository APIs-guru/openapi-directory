import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class V1IbanVerification:
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

    
    def iban_basic(self, request: operations.IbanBasicRequest) -> operations.IbanBasicResponse:
        r"""Checks validity of an IBAN number
        Basic verification of an IBAN number validating its structure
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/iban-verification/check-iban"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IbanBasicResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.iban_basic_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.iban_basic_default_application_json_any = out

        return res

    
    def iban_comprehensive(self, request: operations.IbanComprehensiveRequest) -> operations.IbanComprehensiveResponse:
        r"""Checks validity of an IBAN number
        Comprehensive verification of IBAN number using a service provider for verification
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/iban-verification/comprehensive-check-iban"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IbanComprehensiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.oneapi_1v1_1iban_verification_1check_iban_post_responses_200_content_application_1json_schema = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.iban_comprehensive_default_application_json_any = out

        return res

    