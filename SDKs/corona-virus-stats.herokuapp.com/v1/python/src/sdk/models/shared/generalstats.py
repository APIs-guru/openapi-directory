from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GeneralStats:
    cases_with_outcome: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cases_with_outcome') }})
    critical_condition_active_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('critical_condition_active_cases') }})
    currently_infected: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currently_infected') }})
    death_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('death_cases') }})
    death_closed_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('death_closed_cases') }})
    last_update: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_update'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mild_condition_active_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mild_condition_active_cases') }})
    recovered_closed_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered_closed_cases') }})
    recovery_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovery_cases') }})
    total_cases: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_cases') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
