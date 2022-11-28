import requests
from sdk.models import operations
from . import utils

class StaticFiles:
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

    
    def chromecast_icon(self) -> operations.ChromecastIconResponse:
        r"""Chromecast Icon
        **Update:** This no longer exists. It's not useful, anyway.
        
        A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/icon.png"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromecastIconResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def legal_notice(self) -> operations.LegalNoticeResponse:
        r"""Legal Notice
        All licenses of programs used by Home.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/NOTICE.html.gz"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LegalNoticeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.legal_notice_200_text_plain_string = r.content

        return res

    