from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceRegistrationWindow:
    end_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    period_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodDays') }})
    remaining: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    start_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
