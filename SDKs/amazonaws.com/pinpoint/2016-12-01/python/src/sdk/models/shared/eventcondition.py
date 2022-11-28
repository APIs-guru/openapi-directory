from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventCondition:
    r"""EventCondition
    Specifies the conditions to evaluate for an event that applies to an activity in a journey.
    """
    
    dimensions: Optional[EventDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    message_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageActivity') }})
    
