from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DecisionTaskTimedOutEventAttributes:
    r"""DecisionTaskTimedOutEventAttributes
    Provides the details of the <code>DecisionTaskTimedOut</code> event.
    """
    
    scheduled_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: DecisionTaskTimeoutTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    
