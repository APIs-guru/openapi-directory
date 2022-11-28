from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Setup:
    qr_ssid_suffix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('qr_ssid_suffix') }})
    setup_state: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setup_state') }})
    ssid_suffix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssid_suffix') }})
    stats: Stats = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    tos_accepted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tos_accepted') }})
    
