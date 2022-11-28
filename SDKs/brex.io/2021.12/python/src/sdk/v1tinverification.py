import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class V1TinVerification:
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

    
    def tin_verification_basic_check(self, request: operations.TinVerificationBasicCheckRequest) -> operations.TinVerificationBasicCheckResponse:
        r"""Verifies a TIN number
        Performs a basic verification check of a given TIN number and name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/tin-verification/basic-check"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TinVerificationBasicCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tin_verification_basic_check_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tin_verification_basic_check_default_application_json_any = out

        return res

    
    def tin_verification_comprehensive_check(self, request: operations.TinVerificationComprehensiveCheckRequest) -> operations.TinVerificationComprehensiveCheckResponse:
        r"""EIN Name Lookup with TIN number and retrieves company data
        Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/tin-verification/comprehensive-check"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TinVerificationComprehensiveCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tin_verification_comprehensive_check_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tin_verification_comprehensive_check_default_application_json_any = out

        return res

    
    def tin_verification_name_lookup(self, request: operations.TinVerificationNameLookupRequest) -> operations.TinVerificationNameLookupResponse:
        r"""EIN Name Lookup with TIN number
        Performs an EIN name match using provided TIN Number
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/tin-verification/name-lookup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TinVerificationNameLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tin_verification_name_lookup_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tin_verification_name_lookup_default_application_json_any = out

        return res

    