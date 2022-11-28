from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceInfo:
    fourk_blocked: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('4k_blocked') }})
    capabilities: Capabilities = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    cloud_device_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_device_id') }})
    factory_country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factory_country_code') }})
    hotspot_bssid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hotspot_bssid') }})
    local_authorization_token_hash: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_authorization_token_hash') }})
    mac_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    manufacturer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('model_name') }})
    product_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_name') }})
    public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_key') }})
    ssdp_udn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssdp_udn') }})
    uma_client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uma_client_id') }})
    uptime: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uptime') }})
    weave_device_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weave_device_id') }})
    
