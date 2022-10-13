from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import telephonyinfo


@dataclass_json
@dataclass
class NetworkInfo:
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imei' }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meid' }})
    network_operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkOperatorName' }})
    telephony_infos: Optional[List[telephonyinfo.TelephonyInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telephonyInfos' }})
    wifi_mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMacAddress' }})
    
