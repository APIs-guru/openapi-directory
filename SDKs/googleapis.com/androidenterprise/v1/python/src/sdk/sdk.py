
__doc__ = """ SDK Documentation: https://developers.google.com/android/work/play/emm-api"""
import requests

from . import utils

from .devices import Devices
from .enterprises import Enterprises
from .entitlements import Entitlements
from .grouplicenses import Grouplicenses
from .grouplicenseusers import Grouplicenseusers
from .installs import Installs
from .managedconfigurationsfordevice import Managedconfigurationsfordevice
from .managedconfigurationsforuser import Managedconfigurationsforuser
from .managedconfigurationssettings import Managedconfigurationssettings
from .permissions import Permissions
from .products import Products
from .serviceaccountkeys import Serviceaccountkeys
from .storelayoutclusters import Storelayoutclusters
from .storelayoutpages import Storelayoutpages
from .users import Users
from .webapps import Webapps


SERVERS = [
	"https://androidenterprise.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/android/work/play/emm-api"""
    devices: Devices
    enterprises: Enterprises
    entitlements: Entitlements
    grouplicenses: Grouplicenses
    grouplicenseusers: Grouplicenseusers
    installs: Installs
    managedconfigurationsfordevice: Managedconfigurationsfordevice
    managedconfigurationsforuser: Managedconfigurationsforuser
    managedconfigurationssettings: Managedconfigurationssettings
    permissions: Permissions
    products: Products
    serviceaccountkeys: Serviceaccountkeys
    storelayoutclusters: Storelayoutclusters
    storelayoutpages: Storelayoutpages
    users: Users
    webapps: Webapps

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
        
        self.devices = Devices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.enterprises = Enterprises(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.entitlements = Entitlements(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.grouplicenses = Grouplicenses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.grouplicenseusers = Grouplicenseusers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.installs = Installs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.managedconfigurationsfordevice = Managedconfigurationsfordevice(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.managedconfigurationsforuser = Managedconfigurationsforuser(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.managedconfigurationssettings = Managedconfigurationssettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.permissions = Permissions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.products = Products(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.serviceaccountkeys = Serviceaccountkeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.storelayoutclusters = Storelayoutclusters(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.storelayoutpages = Storelayoutpages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users = Users(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.webapps = Webapps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    