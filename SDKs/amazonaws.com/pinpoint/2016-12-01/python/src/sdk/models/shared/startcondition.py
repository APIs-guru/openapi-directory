from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartCondition:
    r"""StartCondition
    Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    event_start_condition: Optional[EventStartCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventStartCondition') }})
    segment_start_condition: Optional[SegmentCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentStartCondition') }})
    
