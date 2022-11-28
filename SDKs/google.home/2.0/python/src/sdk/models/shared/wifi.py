from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Wifi:
    bssid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bssid') }})
    has_changes: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_changes') }})
    noise_level: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('noise_level') }})
    signal_level: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signal_level') }})
    ssid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    wpa_configured: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_configured') }})
    wpa_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_id') }})
    wpa_state: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_state') }})
    
