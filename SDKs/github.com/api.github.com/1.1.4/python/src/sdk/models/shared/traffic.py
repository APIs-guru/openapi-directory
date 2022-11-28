from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Traffic:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uniques: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniques') }})
    
