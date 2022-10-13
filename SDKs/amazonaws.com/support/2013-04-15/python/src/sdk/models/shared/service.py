from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import category


@dataclass_json
@dataclass
class Service:
    categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
