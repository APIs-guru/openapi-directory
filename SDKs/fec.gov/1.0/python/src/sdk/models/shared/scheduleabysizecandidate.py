from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleABySizeCandidate:
    candidate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidate_id') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    cycle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
