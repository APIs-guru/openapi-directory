import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def apikeys_projects_locations_keys_create(self, request: operations.ApikeysProjectsLocationsKeysCreateRequest) -> operations.ApikeysProjectsLocationsKeysCreateResponse:
        r"""Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/keys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def apikeys_projects_locations_keys_delete(self, request: operations.ApikeysProjectsLocationsKeysDeleteRequest) -> operations.ApikeysProjectsLocationsKeysDeleteResponse:
        r"""Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def apikeys_projects_locations_keys_get(self, request: operations.ApikeysProjectsLocationsKeysGetRequest) -> operations.ApikeysProjectsLocationsKeysGetResponse:
        r"""Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2Key])
                res.v2_key = out

        return res

    
    def apikeys_projects_locations_keys_get_key_string(self, request: operations.ApikeysProjectsLocationsKeysGetKeyStringRequest) -> operations.ApikeysProjectsLocationsKeysGetKeyStringResponse:
        r"""Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}/keyString", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysGetKeyStringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2GetKeyStringResponse])
                res.v2_get_key_string_response = out

        return res

    
    def apikeys_projects_locations_keys_list(self, request: operations.ApikeysProjectsLocationsKeysListRequest) -> operations.ApikeysProjectsLocationsKeysListResponse:
        r"""Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2ListKeysResponse])
                res.v2_list_keys_response = out

        return res

    
    def apikeys_projects_locations_keys_patch(self, request: operations.ApikeysProjectsLocationsKeysPatchRequest) -> operations.ApikeysProjectsLocationsKeysPatchResponse:
        r"""Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def apikeys_projects_locations_keys_undelete(self, request: operations.ApikeysProjectsLocationsKeysUndeleteRequest) -> operations.ApikeysProjectsLocationsKeysUndeleteResponse:
        r"""Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:undelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysUndeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    