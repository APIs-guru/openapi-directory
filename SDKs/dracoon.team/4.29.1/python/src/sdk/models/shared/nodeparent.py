from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeParent:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
