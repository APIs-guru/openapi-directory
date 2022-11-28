import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Systemapks:
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

    
    def androidpublisher_systemapks_variants_create(self, request: operations.AndroidpublisherSystemapksVariantsCreateRequest) -> operations.AndroidpublisherSystemapksVariantsCreateResponse:
        r"""Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out

        return res

    
    def androidpublisher_systemapks_variants_download(self, request: operations.AndroidpublisherSystemapksVariantsDownloadRequest) -> operations.AndroidpublisherSystemapksVariantsDownloadResponse:
        r"""Downloads a previously created system APK which is suitable for inclusion in a system image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidpublisher_systemapks_variants_get(self, request: operations.AndroidpublisherSystemapksVariantsGetRequest) -> operations.AndroidpublisherSystemapksVariantsGetResponse:
        r"""Returns a previously created system APK variant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out

        return res

    
    def androidpublisher_systemapks_variants_list(self, request: operations.AndroidpublisherSystemapksVariantsListRequest) -> operations.AndroidpublisherSystemapksVariantsListResponse:
        r"""Returns the list of previously created system APK variants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidpublisherSystemapksVariantsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemApksListResponse])
                res.system_apks_list_response = out

        return res

    