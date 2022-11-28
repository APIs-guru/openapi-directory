import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Mobiledevices:
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

    
    def directory_mobiledevices_action(self, request: operations.DirectoryMobiledevicesActionRequest) -> operations.DirectoryMobiledevicesActionResponse:
        r"""Takes an action that affects a mobile device. For example, remotely wiping a device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMobiledevicesActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_mobiledevices_delete(self, request: operations.DirectoryMobiledevicesDeleteRequest) -> operations.DirectoryMobiledevicesDeleteResponse:
        r"""Removes a mobile device.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMobiledevicesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_mobiledevices_get(self, request: operations.DirectoryMobiledevicesGetRequest) -> operations.DirectoryMobiledevicesGetResponse:
        r"""Retrieves a mobile device's properties.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMobiledevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MobileDevice])
                res.mobile_device = out

        return res

    
    def directory_mobiledevices_list(self, request: operations.DirectoryMobiledevicesListRequest) -> operations.DirectoryMobiledevicesListResponse:
        r"""Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/mobile", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryMobiledevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MobileDevices])
                res.mobile_devices = out

        return res

    