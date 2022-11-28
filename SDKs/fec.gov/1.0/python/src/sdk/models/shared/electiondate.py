from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ElectionDate:
    active_election: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_election') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    election_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    election_district: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_district') }})
    election_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_notes') }})
    election_party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_party') }})
    election_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_state') }})
    election_type_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_type_full') }})
    election_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_type_id') }})
    election_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('election_year') }})
    office_sought: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('office_sought') }})
    primary_general_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_general_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    update_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
