import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Alerts:
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

    
    def adsense_alerts_delete(self, request: operations.AdsenseAlertsDeleteRequest) -> operations.AdsenseAlertsDeleteResponse:
        r"""Dismiss (delete) the specified alert from the publisher's AdSense account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/alerts/{alertId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAlertsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def adsense_alerts_list(self, request: operations.AdsenseAlertsListRequest) -> operations.AdsenseAlertsListResponse:
        r"""List the alerts for this AdSense account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/alerts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AdsenseAlertsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Alerts])
                res.alerts = out

        return res

    