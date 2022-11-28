from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaFunctionTimedOutEventAttributes:
    r"""LambdaFunctionTimedOutEventAttributes
    Provides details of the <code>LambdaFunctionTimedOut</code> event.
    """
    
    scheduled_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: Optional[LambdaFunctionTimeoutTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    
