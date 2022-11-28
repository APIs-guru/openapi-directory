from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ControllersWebAPIGroceryListControllerUpdateItemByGUIDRequest:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }, 'form': { 'field_name': 'department' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }, 'form': { 'field_name': 'guid' }})
    ischecked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ischecked') }, 'form': { 'field_name': 'ischecked' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }, 'form': { 'field_name': 'notes' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }, 'form': { 'field_name': 'quantity' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }, 'form': { 'field_name': 'unit' }})
    
