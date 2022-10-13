from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigOvenModelShoppingListLine:
    date_added: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateAdded', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dept: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dept' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GUID' }})
    html_item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HTMLItemName' }})
    is_checked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsChecked' }})
    item_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemName' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    list_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListID' }})
    meal_plan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MealPlanID' }})
    meal_plan_object_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MealPlanObjectType' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    pending_addition: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PendingAddition' }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecipeID' }})
    shopping_list_line_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShoppingListLineID' }})
    store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Store' }})
    text_amt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextAmt' }})
    third_party_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThirdPartyHost' }})
    third_party_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThirdPartyTitle' }})
    third_party_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThirdPartyURL' }})
    
