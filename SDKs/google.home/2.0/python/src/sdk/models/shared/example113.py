from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Example113:
    ssid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid') }})
    wpa_auth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_auth') }})
    wpa_cipher: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_cipher') }})
    wpa_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa_id') }})
    
