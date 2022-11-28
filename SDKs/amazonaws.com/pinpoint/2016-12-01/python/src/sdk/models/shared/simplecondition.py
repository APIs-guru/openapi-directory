from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleCondition:
    r"""SimpleCondition
    Specifies a condition to evaluate for an activity in a journey.
    """
    
    event_condition: Optional[EventCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventCondition') }})
    segment_condition: Optional[SegmentCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentCondition') }})
    segment_dimensions: Optional[SegmentDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentDimensions') }})
    
