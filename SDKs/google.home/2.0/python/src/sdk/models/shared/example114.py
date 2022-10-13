from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example114:
    bssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bssid' }})
    signal_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signal_level' }})
    ssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssid' }})
    wpa_auth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_auth' }})
    wpa_cipher: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_cipher' }})
    wpa_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_id' }})
    
