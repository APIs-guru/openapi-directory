from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Device:
    r"""Device
    Information of a particular device.
    """
    
    device_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    iot_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IotThingName') }})
    
