from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceTier:
    device_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceGroupNames' }})
    level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    
