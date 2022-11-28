from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RadAnalyst:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    analyst_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyst_id') }})
    analyst_short_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyst_short_id') }})
    assignment_update_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignment_update_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_name') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    rad_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rad_branch') }})
    telephone_ext: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telephone_ext') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
