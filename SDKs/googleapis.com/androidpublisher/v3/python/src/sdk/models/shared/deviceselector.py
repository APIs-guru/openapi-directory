from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceSelector:
    r"""DeviceSelector
    Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
    """
    
    device_ram: Optional[DeviceRAM] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRam') }})
    excluded_device_ids: Optional[List[DeviceID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedDeviceIds') }})
    forbidden_system_features: Optional[List[SystemFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forbiddenSystemFeatures') }})
    included_device_ids: Optional[List[DeviceID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedDeviceIds') }})
    required_system_features: Optional[List[SystemFeature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredSystemFeatures') }})
    
