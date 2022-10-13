from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ZoneInfo:
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    in_bundles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_bundles' }})
    includes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includes' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
