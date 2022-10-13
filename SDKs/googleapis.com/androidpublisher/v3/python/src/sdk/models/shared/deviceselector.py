from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceram
from . import deviceid
from . import systemfeature
from . import deviceid
from . import systemfeature


@dataclass_json
@dataclass
class DeviceSelector:
    device_ram: Optional[deviceram.DeviceRAM] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceRam' }})
    excluded_device_ids: Optional[List[deviceid.DeviceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedDeviceIds' }})
    forbidden_system_features: Optional[List[systemfeature.SystemFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forbiddenSystemFeatures' }})
    included_device_ids: Optional[List[deviceid.DeviceID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedDeviceIds' }})
    required_system_features: Optional[List[systemfeature.SystemFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredSystemFeatures' }})
    
