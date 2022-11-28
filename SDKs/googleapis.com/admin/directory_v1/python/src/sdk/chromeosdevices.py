import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Chromeosdevices:
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

    
    def directory_chromeosdevices_action(self, request: operations.DirectoryChromeosdevicesActionRequest) -> operations.DirectoryChromeosdevicesActionResponse:
        r"""Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryChromeosdevicesActionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_chromeosdevices_get(self, request: operations.DirectoryChromeosdevicesGetRequest) -> operations.DirectoryChromeosdevicesGetResponse:
        r"""Retrieves a Chrome OS device's properties.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryChromeosdevicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChromeOsDevice])
                res.chrome_os_device = out

        return res

    
    def directory_chromeosdevices_list(self, request: operations.DirectoryChromeosdevicesListRequest) -> operations.DirectoryChromeosdevicesListResponse:
        r"""Retrieves a paginated list of Chrome OS devices within an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryChromeosdevicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChromeOsDevices])
                res.chrome_os_devices = out

        return res

    
    def directory_chromeosdevices_move_devices_to_ou(self, request: operations.DirectoryChromeosdevicesMoveDevicesToOuRequest) -> operations.DirectoryChromeosdevicesMoveDevicesToOuResponse:
        r"""Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryChromeosdevicesMoveDevicesToOuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def directory_chromeosdevices_patch(self, request: operations.DirectoryChromeosdevicesPatchRequest) -> operations.DirectoryChromeosdevicesPatchResponse:
        r"""Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryChromeosdevicesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChromeOsDevice])
                res.chrome_os_device = out

        return res

    
    def directory_chromeosdevices_update(self, request: operations.DirectoryChromeosdevicesUpdateRequest) -> operations.DirectoryChromeosdevicesUpdateResponse:
        r"""Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DirectoryChromeosdevicesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChromeOsDevice])
                res.chrome_os_device = out

        return res

    