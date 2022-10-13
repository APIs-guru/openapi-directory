from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BigOvenModelApi2RecipeNote:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date' }})
    date_dt: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateDT', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GUID' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    people: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'People' }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecipeID' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }})
    variations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Variations' }})
    
