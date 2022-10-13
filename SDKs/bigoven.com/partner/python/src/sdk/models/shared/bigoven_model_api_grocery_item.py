from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigOvenModelAPIGroceryItem:
    big_oven_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BigOvenObject' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Department' }})
    display_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayQuantity' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GUID' }})
    is_checked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsChecked' }})
    item_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemID' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    local_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecipeID' }})
    third_party_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThirdPartyURL' }})
    
