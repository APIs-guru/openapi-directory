import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Wifi:
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

    
    def connectto_wi_fi_network(self, request: operations.ConnecttoWiFiNetworkRequest) -> operations.ConnecttoWiFiNetworkResponse:
        r"""Connect to Wi-Fi Network
        **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/connect_wifi"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConnecttoWiFiNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def forget_wi_fi_network(self, request: operations.ForgetWiFiNetworkRequest) -> operations.ForgetWiFiNetworkResponse:
        r"""Forget Wi-Fi Network
        This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/forget_wifi"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForgetWiFiNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_saved_networks(self) -> operations.GetSavedNetworksResponse:
        r"""Get Saved Networks
        This gets a list of all saved Wi-Fi networks.
        
        Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
        `wpa_id` is an incrementing number used to identify a saved network.  
        #TODO: Add values for `wpa_auth` and `wpa_cipher`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/configured_networks"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSavedNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Example113]])
                res.example113s = out

        return res

    
    def get_wi_fi_scan_results(self) -> operations.GetWiFiScanResultsResponse:
        r"""Get Wi-Fi Scan Results
        This gets a list of all nearby Wi-Fi access points.
        
        The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scan_results"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWiFiScanResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Example114]])
                res.example114s = out

        return res

    
    def scanfor_networks(self) -> operations.ScanforNetworksResponse:
        r"""Scan for Networks
        This initiates scanning for Wi-Fi networks.
        
        The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scan_wifi"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScanforNetworksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    