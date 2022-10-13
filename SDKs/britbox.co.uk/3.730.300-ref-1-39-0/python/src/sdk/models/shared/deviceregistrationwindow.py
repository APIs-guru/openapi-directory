from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceRegistrationWindow:
    end_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    period_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodDays' }})
    remaining: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
