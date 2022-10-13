from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2GroceryListDepartmentResult:
    dept: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dept' }})
    item: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    
