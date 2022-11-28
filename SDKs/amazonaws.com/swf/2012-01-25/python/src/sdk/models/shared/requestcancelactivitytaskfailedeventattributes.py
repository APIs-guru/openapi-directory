from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestCancelActivityTaskFailedEventAttributes:
    r"""RequestCancelActivityTaskFailedEventAttributes
    Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
    """
    
    activity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    cause: RequestCancelActivityTaskFailedCauseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
