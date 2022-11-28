from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Alarm:
    date_pattern: DatePattern = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_pattern') }})
    fire_time: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fire_time') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time_pattern: TimePattern = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_pattern') }})
    
