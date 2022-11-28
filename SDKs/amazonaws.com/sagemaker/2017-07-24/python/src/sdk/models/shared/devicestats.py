from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceStats:
    r"""DeviceStats
    Status of devices.
    """
    
    connected_device_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectedDeviceCount') }})
    registered_device_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegisteredDeviceCount') }})
    
