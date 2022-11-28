from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartLambdaFunctionFailedEventAttributes:
    r"""StartLambdaFunctionFailedEventAttributes
    Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.
    """
    
    cause: Optional[StartLambdaFunctionFailedCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    scheduled_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    
