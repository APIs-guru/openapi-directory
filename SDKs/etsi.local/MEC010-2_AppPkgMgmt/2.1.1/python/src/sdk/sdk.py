
__doc__ = """ SDK Documentation: https://www.etsi.org/deliver/etsi_gs/MEC/001_099/01002/02.01.01_60/gs_MEC01002v020101p.pdf - ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management, v2.1.1"""
import requests

from . import utils

from .app_pkgm import AppPkgm
from .app_pkgm_notifications import AppPkgmNotifications


SERVERS = [
	"http://etsi.local",
	"https://localhost/app_pkgm/v1",
]


class SDK:
    r"""SDK Documentation: https://www.etsi.org/deliver/etsi_gs/MEC/001_099/01002/02.01.01_60/gs_MEC01002v020101p.pdf - ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management, v2.1.1"""
    app_pkgm: AppPkgm
    app_pkgm_notifications: AppPkgmNotifications

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.app_pkgm = AppPkgm(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.app_pkgm_notifications = AppPkgmNotifications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    