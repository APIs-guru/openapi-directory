from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleLambdaFunctionFailedEventAttributes:
    r"""ScheduleLambdaFunctionFailedEventAttributes
    Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.
    """
    
    cause: ScheduleLambdaFunctionFailedCauseEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
