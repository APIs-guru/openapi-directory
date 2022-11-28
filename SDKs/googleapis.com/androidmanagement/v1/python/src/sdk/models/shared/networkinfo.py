from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkInfo:
    r"""NetworkInfo
    Device network info.
    """
    
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imei') }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meid') }})
    network_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkOperatorName') }})
    telephony_infos: Optional[List[TelephonyInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephonyInfos') }})
    wifi_mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacAddress') }})
    
