import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PretargetingConfig:
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

    
    def adexchangebuyer_pretargeting_config_delete(self, request: operations.AdexchangebuyerPretargetingConfigDeleteRequest) -> operations.AdexchangebuyerPretargetingConfigDeleteResponse:
        r"""Deletes an existing pretargeting config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pretargetingconfigs/{accountId}/{configId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerPretargetingConfigDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def adexchangebuyer_pretargeting_config_get(self, request: operations.AdexchangebuyerPretargetingConfigGetRequest) -> operations.AdexchangebuyerPretargetingConfigGetResponse:
        r"""Gets a specific pretargeting configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pretargetingconfigs/{accountId}/{configId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerPretargetingConfigGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def adexchangebuyer_pretargeting_config_insert(self, request: operations.AdexchangebuyerPretargetingConfigInsertRequest) -> operations.AdexchangebuyerPretargetingConfigInsertResponse:
        r"""Inserts a new pretargeting configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pretargetingconfigs/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerPretargetingConfigInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def adexchangebuyer_pretargeting_config_list(self, request: operations.AdexchangebuyerPretargetingConfigListRequest) -> operations.AdexchangebuyerPretargetingConfigListResponse:
        r"""Retrieves a list of the authenticated user's pretargeting configurations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pretargetingconfigs/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerPretargetingConfigListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfigList])
                res.pretargeting_config_list = out

        return res

    
    def adexchangebuyer_pretargeting_config_patch(self, request: operations.AdexchangebuyerPretargetingConfigPatchRequest) -> operations.AdexchangebuyerPretargetingConfigPatchResponse:
        r"""Updates an existing pretargeting config. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pretargetingconfigs/{accountId}/{configId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerPretargetingConfigPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    
    def adexchangebuyer_pretargeting_config_update(self, request: operations.AdexchangebuyerPretargetingConfigUpdateRequest) -> operations.AdexchangebuyerPretargetingConfigUpdateResponse:
        r"""Updates an existing pretargeting config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pretargetingconfigs/{accountId}/{configId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdexchangebuyerPretargetingConfigUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PretargetingConfig])
                res.pretargeting_config = out

        return res

    