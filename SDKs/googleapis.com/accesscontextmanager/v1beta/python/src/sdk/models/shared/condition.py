from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicepolicy


@dataclass_json
@dataclass
class Condition:
    device_policy: Optional[devicepolicy.DevicePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePolicy' }})
    ip_subnetworks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipSubnetworks' }})
    members: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negate' }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    required_access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredAccessLevels' }})
    
