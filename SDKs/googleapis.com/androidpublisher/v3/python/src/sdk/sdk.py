
__doc__ = """ SDK Documentation: https://developers.google.com/android-publisher"""
import requests

from . import utils

from .applications import Applications
from .edits import Edits
from .generatedapks import Generatedapks
from .grants import Grants
from .inappproducts import Inappproducts
from .internalappsharingartifacts import Internalappsharingartifacts
from .monetization import Monetization
from .orders import Orders
from .purchases import Purchases
from .reviews import Reviews
from .systemapks import Systemapks
from .users import Users


SERVERS = [
	"https://androidpublisher.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/android-publisher"""
    applications: Applications
    edits: Edits
    generatedapks: Generatedapks
    grants: Grants
    inappproducts: Inappproducts
    internalappsharingartifacts: Internalappsharingartifacts
    monetization: Monetization
    orders: Orders
    purchases: Purchases
    reviews: Reviews
    systemapks: Systemapks
    users: Users

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
        
        self.applications = Applications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.edits = Edits(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.generatedapks = Generatedapks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.grants = Grants(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inappproducts = Inappproducts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.internalappsharingartifacts = Internalappsharingartifacts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.monetization = Monetization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orders = Orders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.purchases = Purchases(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.reviews = Reviews(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.systemapks = Systemapks(
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
    
    