from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GcpUserAccessBinding:
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevels' }})
    group_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupKey' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
