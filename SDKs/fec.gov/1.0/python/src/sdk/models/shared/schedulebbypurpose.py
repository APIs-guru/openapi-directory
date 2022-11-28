from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleBByPurpose:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    purpose: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    memo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_count') }})
    memo_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_total') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
