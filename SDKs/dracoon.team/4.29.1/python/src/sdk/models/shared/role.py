from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import right


@dataclass_json
@dataclass
class Role:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    items: Optional[List[right.Right]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
