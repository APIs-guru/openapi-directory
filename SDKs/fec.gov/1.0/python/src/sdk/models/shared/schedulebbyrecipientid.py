from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleBByRecipientID:
    committee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    recipient_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_id') }})
    committee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_name') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    memo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_count') }})
    memo_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memo_total') }})
    recipient_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_name') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
