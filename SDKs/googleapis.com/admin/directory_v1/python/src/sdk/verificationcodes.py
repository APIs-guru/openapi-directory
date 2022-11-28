import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VerificationCodes:
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

    
    def directory_verification_codes_generate(self, request: operations.DirectoryVerificationCodesGenerateRequest) -> operations.DirectoryVerificationCodesGenerateResponse:
        r"""Generates new backup verification codes for the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/users/{userKey}/verificationCodes/generate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryVerificationCodesGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_verification_codes_invalidate(self, request: operations.DirectoryVerificationCodesInvalidateRequest) -> operations.DirectoryVerificationCodesInvalidateResponse:
        r"""Invalidates the current backup verification codes for the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/users/{userKey}/verificationCodes/invalidate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryVerificationCodesInvalidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_verification_codes_list(self, request: operations.DirectoryVerificationCodesListRequest) -> operations.DirectoryVerificationCodesListResponse:
        r"""Returns the current set of valid backup verification codes for the specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/users/{userKey}/verificationCodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryVerificationCodesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerificationCodes])
                res.verification_codes = out

        return res

    