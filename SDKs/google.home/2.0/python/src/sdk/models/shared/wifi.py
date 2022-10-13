from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Wifi:
    bssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bssid' }})
    has_changes: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_changes' }})
    noise_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noise_level' }})
    signal_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signal_level' }})
    ssid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssid' }})
    wpa_configured: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_configured' }})
    wpa_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_id' }})
    wpa_state: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa_state' }})
    
