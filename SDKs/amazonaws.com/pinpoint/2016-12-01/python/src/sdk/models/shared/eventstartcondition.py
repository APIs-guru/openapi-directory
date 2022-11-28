from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventStartCondition:
    r"""EventStartCondition
    Specifies the settings for an event that causes a journey activity to start.
    """
    
    event_filter: Optional[EventFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentId') }})
    
