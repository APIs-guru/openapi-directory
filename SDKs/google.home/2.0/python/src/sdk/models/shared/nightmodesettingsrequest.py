from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NightModesettingsRequest:
    demo_to_user: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('demo_to_user') }})
    do_not_disturb: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('do_not_disturb') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    led_brightness: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('led_brightness') }})
    volume: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    windows: List[Window] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('windows') }})
    
