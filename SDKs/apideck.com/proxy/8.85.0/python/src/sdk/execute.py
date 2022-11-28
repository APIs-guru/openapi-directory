import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Execute:
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

    
    def delete_proxy(self, request: operations.DeleteProxyRequest) -> operations.DeleteProxyResponse:
        r"""DELETE
        Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
        **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proxy"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_proxy_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProxy401ApplicationJSON])
                res.delete_proxy_401_application_json_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_proxy_default_application_json_any = out

        return res

    
    def get_proxy(self, request: operations.GetProxyRequest) -> operations.GetProxyResponse:
        r"""GET
        Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
        **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proxy"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_proxy_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProxy401ApplicationJSON])
                res.get_proxy_401_application_json_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_proxy_default_application_json_any = out

        return res

    
    def options_proxy(self, request: operations.OptionsProxyRequest) -> operations.OptionsProxyResponse:
        r"""OPTIONS
        Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
        **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proxy"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("OPTIONS", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OptionsProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.options_proxy_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.OptionsProxy401ApplicationJSON])
                res.options_proxy_401_application_json_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.options_proxy_default_application_json_any = out

        return res

    
    def patch_proxy(self, request: operations.PatchProxyRequest) -> operations.PatchProxyResponse:
        r"""PATCH
        Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
        **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proxy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.patch_proxy_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchProxy401ApplicationJSON])
                res.patch_proxy_401_application_json_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.patch_proxy_default_application_json_any = out

        return res

    
    def post_proxy(self, request: operations.PostProxyRequest) -> operations.PostProxyResponse:
        r"""POST
        Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
        **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proxy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_proxy_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostProxy401ApplicationJSON])
                res.post_proxy_401_application_json_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.post_proxy_default_application_json_any = out

        return res

    
    def put_proxy(self, request: operations.PutProxyRequest) -> operations.PutProxyResponse:
        r"""PUT
        Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
        **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/proxy"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProxyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_proxy_200_application_json_any = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutProxy401ApplicationJSON])
                res.put_proxy_401_application_json_object = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_proxy_default_application_json_any = out

        return res

    