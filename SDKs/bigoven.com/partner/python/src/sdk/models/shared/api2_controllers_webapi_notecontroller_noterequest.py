from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ControllersWebAPINoteControllerNoteRequest:
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'CreationDate' }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'Date' }})
    date_dt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateDT') }, 'form': { 'field_name': 'DateDT' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GUID') }, 'form': { 'field_name': 'GUID' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }, 'form': { 'field_name': 'ID' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }, 'form': { 'field_name': 'Notes' }})
    people: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('People') }, 'form': { 'field_name': 'People' }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeID') }, 'form': { 'field_name': 'RecipeID' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserID') }, 'form': { 'field_name': 'UserID' }})
    variations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variations') }, 'form': { 'field_name': 'Variations' }})
    
