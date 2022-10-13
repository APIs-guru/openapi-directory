import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://apikeys.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def apikeys_keys_lookup_key(self, request: operations.ApikeysKeysLookupKeyRequest) -> operations.ApikeysKeysLookupKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/keys:lookupKey"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysKeysLookupKeyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2LookupKeyResponse])
                res.v2_lookup_key_response = out

        return res

    
    
    def apikeys_projects_locations_keys_create(self, request: operations.ApikeysProjectsLocationsKeysCreateRequest) -> operations.ApikeysProjectsLocationsKeysCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/keys", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def apikeys_projects_locations_keys_delete(self, request: operations.ApikeysProjectsLocationsKeysDeleteRequest) -> operations.ApikeysProjectsLocationsKeysDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def apikeys_projects_locations_keys_get(self, request: operations.ApikeysProjectsLocationsKeysGetRequest) -> operations.ApikeysProjectsLocationsKeysGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2Key])
                res.v2_key = out

        return res

    
    
    def apikeys_projects_locations_keys_get_key_string(self, request: operations.ApikeysProjectsLocationsKeysGetKeyStringRequest) -> operations.ApikeysProjectsLocationsKeysGetKeyStringResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}/keyString", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysGetKeyStringResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2GetKeyStringResponse])
                res.v2_get_key_string_response = out

        return res

    
    
    def apikeys_projects_locations_keys_list(self, request: operations.ApikeysProjectsLocationsKeysListRequest) -> operations.ApikeysProjectsLocationsKeysListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.V2ListKeysResponse])
                res.v2_list_keys_response = out

        return res

    
    
    def apikeys_projects_locations_keys_patch(self, request: operations.ApikeysProjectsLocationsKeysPatchRequest) -> operations.ApikeysProjectsLocationsKeysPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def apikeys_projects_locations_keys_undelete(self, request: operations.ApikeysProjectsLocationsKeysUndeleteRequest) -> operations.ApikeysProjectsLocationsKeysUndeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:undelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ApikeysProjectsLocationsKeysUndeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    