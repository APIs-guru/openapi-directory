

import requests

from . import utils

from .account_detail_api import AccountDetailAPI
from .authorization import Authorization
from .authorization_api import AuthorizationAPI
from .digilocker_meta_apis import DigiLockerMetaApIs
from .digilocker_sign_up_apis import DigiLockerSignUpApIs
from .file_apis import FileApIs
from .token_revocation_api import TokenRevocationAPI


SERVERS = [
	"https://betaapi.digitallocker.gov.in/public",
]


class SDK:
    
    account_detail_api: AccountDetailAPI
    authorization: Authorization
    authorization_api: AuthorizationAPI
    digi_locker_meta_ap_is: DigiLockerMetaApIs
    digi_locker_sign_up_ap_is: DigiLockerSignUpApIs
    file_ap_is: FileApIs
    token_revocation_api: TokenRevocationAPI

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
        
        self.account_detail_api = AccountDetailAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.authorization = Authorization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.authorization_api = AuthorizationAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.digi_locker_meta_ap_is = DigiLockerMetaApIs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.digi_locker_sign_up_ap_is = DigiLockerSignUpApIs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.file_ap_is = FileApIs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.token_revocation_api = TokenRevocationAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    