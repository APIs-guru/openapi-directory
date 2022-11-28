from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SequenceSegment:
    r"""SequenceSegment
    Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.
    """
    
    first_step_should_match_first_hit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstStepShouldMatchFirstHit') }})
    segment_sequence_steps: Optional[List[SegmentSequenceStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentSequenceSteps') }})
    
