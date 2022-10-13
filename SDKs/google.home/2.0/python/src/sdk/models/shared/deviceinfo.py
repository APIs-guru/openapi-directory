from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import capabilities


@dataclass_json
@dataclass
class DeviceInfo:
    fourk_blocked: int = field(default=None, metadata={'dataclasses_json': { 'field_name': '4k_blocked' }})
    capabilities: capabilities.Capabilities = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    cloud_device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloud_device_id' }})
    factory_country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factory_country_code' }})
    hotspot_bssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotspot_bssid' }})
    local_authorization_token_hash: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local_authorization_token_hash' }})
    mac_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    manufacturer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model_name' }})
    product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_name' }})
    public_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    ssdp_udn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssdp_udn' }})
    uma_client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uma_client_id' }})
    uptime: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uptime' }})
    weave_device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weave_device_id' }})
    
