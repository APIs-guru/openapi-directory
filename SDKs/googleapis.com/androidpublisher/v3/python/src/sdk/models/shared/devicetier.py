from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceTier:
    r"""DeviceTier
    A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
    """
    
    device_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceGroupNames') }})
    level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    
