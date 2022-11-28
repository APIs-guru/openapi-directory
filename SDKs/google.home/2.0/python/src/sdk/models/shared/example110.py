from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Example110:
    audio_mode: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_mode') }})
    connected_devices: List[ConnectedDevice] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_devices') }})
    connecting_devices: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connecting_devices') }})
    discovery_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovery_enabled') }})
    remote_sink: RemoteSink = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_sink') }})
    scanning_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanning_enabled') }})
    
