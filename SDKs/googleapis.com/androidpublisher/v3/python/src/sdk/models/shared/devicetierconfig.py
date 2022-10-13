from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicegroup
from . import devicetierset


@dataclass_json
@dataclass
class DeviceTierConfig:
    device_groups: Optional[List[devicegroup.DeviceGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceGroups' }})
    device_tier_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTierConfigId' }})
    device_tier_set: Optional[devicetierset.DeviceTierSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTierSet' }})
    
