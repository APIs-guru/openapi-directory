from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleAByState:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_full: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_full') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
