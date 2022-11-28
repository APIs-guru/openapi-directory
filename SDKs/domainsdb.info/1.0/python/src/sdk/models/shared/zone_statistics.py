from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ZoneStatistics:
    date_: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dec: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dec') }})
    inc: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inc') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
