import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Installs:
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

    
    def androidenterprise_installs_delete(self, request: operations.AndroidenterpriseInstallsDeleteRequest) -> operations.AndroidenterpriseInstallsDeleteResponse:
        r"""Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseInstallsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def androidenterprise_installs_get(self, request: operations.AndroidenterpriseInstallsGetRequest) -> operations.AndroidenterpriseInstallsGetResponse:
        r"""Retrieves details of an installation of an app on a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseInstallsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Install])
                res.install = out

        return res

    
    def androidenterprise_installs_list(self, request: operations.AndroidenterpriseInstallsListRequest) -> operations.AndroidenterpriseInstallsListResponse:
        r"""Retrieves the details of all apps installed on the specified device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseInstallsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InstallsListResponse])
                res.installs_list_response = out

        return res

    
    def androidenterprise_installs_update(self, request: operations.AndroidenterpriseInstallsUpdateRequest) -> operations.AndroidenterpriseInstallsUpdateResponse:
        r"""Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AndroidenterpriseInstallsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Install])
                res.install = out

        return res

    