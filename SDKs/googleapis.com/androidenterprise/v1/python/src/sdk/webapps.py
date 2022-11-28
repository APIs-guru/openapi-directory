import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Webapps:
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

    
    def androidenterprise_webapps_delete(self, request: operations.AndroidenterpriseWebappsDeleteRequest) -> operations.AndroidenterpriseWebappsDeleteResponse:
        r"""Deletes an existing web app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseWebappsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_webapps_get(self, request: operations.AndroidenterpriseWebappsGetRequest) -> operations.AndroidenterpriseWebappsGetResponse:
        r"""Gets an existing web app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseWebappsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebApp])
                res.web_app = out

        return res

    
    def androidenterprise_webapps_insert(self, request: operations.AndroidenterpriseWebappsInsertRequest) -> operations.AndroidenterpriseWebappsInsertResponse:
        r"""Creates a new web app for the enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/webApps", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseWebappsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebApp])
                res.web_app = out

        return res

    
    def androidenterprise_webapps_list(self, request: operations.AndroidenterpriseWebappsListRequest) -> operations.AndroidenterpriseWebappsListResponse:
        r"""Retrieves the details of all web apps for a given enterprise.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/webApps", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseWebappsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebAppsListResponse])
                res.web_apps_list_response = out

        return res

    
    def androidenterprise_webapps_update(self, request: operations.AndroidenterpriseWebappsUpdateRequest) -> operations.AndroidenterpriseWebappsUpdateResponse:
        r"""Updates an existing web app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseWebappsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebApp])
                res.web_app = out

        return res

    