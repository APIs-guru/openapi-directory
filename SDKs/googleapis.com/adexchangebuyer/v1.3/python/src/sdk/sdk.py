
__doc__ = """ SDK Documentation: https://developers.google.com/ad-exchange/buyer-rest"""
import requests

from . import utils

from .accounts import Accounts
from .billinginfo import BillingInfo
from .budget import Budget
from .creatives import Creatives
from .directdeals import DirectDeals
from .performancereport import PerformanceReport
from .pretargetingconfig import PretargetingConfig


SERVERS = [
	"https://www.googleapis.com/adexchangebuyer/v1.3",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/ad-exchange/buyer-rest"""
    accounts: Accounts
    billing_info: BillingInfo
    budget: Budget
    creatives: Creatives
    direct_deals: DirectDeals
    performance_report: PerformanceReport
    pretargeting_config: PretargetingConfig

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
        
        self.accounts = Accounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing_info = BillingInfo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.budget = Budget(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.creatives = Creatives(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.direct_deals = DirectDeals(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.performance_report = PerformanceReport(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pretargeting_config = PretargetingConfig(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    