from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Example112:
    device_class: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_class') }})
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    expected_profiles: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expected_profiles') }})
    mac_address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rssi: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rssi') }})
    
