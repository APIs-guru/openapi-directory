from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Example1:
    aogh: Aogh = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aogh') }})
    audio: Audio = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    build_info: BuildInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_info') }})
    detail: Detail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    device_info: DeviceInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_info') }})
    multizone: Multizone = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multizone') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    net: Net = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    night_mode_params: NightModeParams = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('night_mode_params') }})
    opencast: Opencast = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opencast') }})
    opt_in: OptIn = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in') }})
    proxy: Proxy = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy') }})
    settings: Settings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    setup: Setup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setup') }})
    sign: Sign = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sign') }})
    user_eq: UserEq = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_eq') }})
    version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    wifi: Wifi = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifi') }})
    
