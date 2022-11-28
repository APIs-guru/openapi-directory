from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutLogEventsResponse:
    next_sequence_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSequenceToken') }})
    rejected_log_events_info: Optional[RejectedLogEventsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejectedLogEventsInfo') }})
    
