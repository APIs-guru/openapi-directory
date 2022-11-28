

import requests

from . import utils

from .dispatch_green_energy_distribution_api_ import DispatchGreenEnergyDistributionAPI
from .greenpowerindex_grünstromindex_ import GreenPowerIndexGrünstromIndex
from .metering_decorator_ import MeteringDecorator
from .ocpp import Ocpp
from .openmeter import OpenMeter
from .smarthome import SmartHome
from .strom_quittung import StromQuittung
from .stromkonto_ledger_ import StromkontoLedger
from .tse import Tse
from .tariff_price_api_ import TariffPriceAPI
from .wim_wechselprozesse_im_messwesen_strom_status_api_ import WiMWechselprozesseImMesswesenStromStatusAPI
from .easee import Easee


SERVERS = [
	"https://api.corrently.io/v2.0",
]


class SDK:
    
    dispatch_green_energy_distribution_api_: DispatchGreenEnergyDistributionAPI
    green_power_index_grünstrom_index_: GreenPowerIndexGrünstromIndex
    metering_decorator_: MeteringDecorator
    ocpp: Ocpp
    open_meter: OpenMeter
    smart_home: SmartHome
    strom_quittung: StromQuittung
    stromkonto_ledger_: StromkontoLedger
    tse: Tse
    tariff_price_api_: TariffPriceAPI
    wi_m_wechselprozesse_im_messwesen_strom_status_api_: WiMWechselprozesseImMesswesenStromStatusAPI
    easee: Easee

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
        
        self.dispatch_green_energy_distribution_api_ = DispatchGreenEnergyDistributionAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.green_power_index_grünstrom_index_ = GreenPowerIndexGrünstromIndex(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.metering_decorator_ = MeteringDecorator(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ocpp = Ocpp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.open_meter = OpenMeter(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.smart_home = SmartHome(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.strom_quittung = StromQuittung(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stromkonto_ledger_ = StromkontoLedger(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tse = Tse(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tariff_price_api_ = TariffPriceAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.wi_m_wechselprozesse_im_messwesen_strom_status_api_ = WiMWechselprozesseImMesswesenStromStatusAPI(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.easee = Easee(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    