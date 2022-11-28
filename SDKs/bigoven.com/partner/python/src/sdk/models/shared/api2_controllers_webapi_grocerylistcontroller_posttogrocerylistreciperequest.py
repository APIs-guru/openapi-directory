from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }, 'form': { 'field_name': 'department' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }, 'form': { 'field_name': 'notes' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }, 'form': { 'field_name': 'quantity' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }, 'form': { 'field_name': 'unit' }})
    
