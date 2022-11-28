

import requests

from . import utils

from .v1_company import V1Company
from .v1_ein_verification import V1EinVerification
from .v1_iban_verification import V1IbanVerification
from .v1_nif_verification import V1NifVerification
from .v1_pepsanction import V1Pepsanction
from .v1_product import V1Product
from .v1_system import V1System
from .v1_tin_verification import V1TinVerification
from .v1_vat_verification import V1VatVerification


SERVERS = [
	"https://api.kompany.com/",
]


class SDK:
    
    v1_company: V1Company
    v1_ein_verification: V1EinVerification
    v1_iban_verification: V1IbanVerification
    v1_nif_verification: V1NifVerification
    v1_pepsanction: V1Pepsanction
    v1_product: V1Product
    v1_system: V1System
    v1_tin_verification: V1TinVerification
    v1_vat_verification: V1VatVerification

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
        
        self.v1_company = V1Company(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_ein_verification = V1EinVerification(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_iban_verification = V1IbanVerification(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_nif_verification = V1NifVerification(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_pepsanction = V1Pepsanction(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_product = V1Product(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_system = V1System(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_tin_verification = V1TinVerification(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1_vat_verification = V1VatVerification(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    