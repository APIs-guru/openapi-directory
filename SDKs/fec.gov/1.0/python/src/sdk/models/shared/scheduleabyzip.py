from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleAByZip:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    zip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_full') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
