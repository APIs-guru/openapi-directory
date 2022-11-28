from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityTaskTimedOutEventAttributes:
    r"""ActivityTaskTimedOutEventAttributes
    Provides the details of the <code>ActivityTaskTimedOut</code> event.
    """
    
    scheduled_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: ActivityTaskTimeoutTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
