from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }, 'form': { 'field_name': 'department' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guid' }, 'form': { 'field_name': 'guid' }})
    ischecked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ischecked' }, 'form': { 'field_name': 'ischecked' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }, 'form': { 'field_name': 'notes' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }, 'form': { 'field_name': 'quantity' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }, 'form': { 'field_name': 'unit' }})
    
