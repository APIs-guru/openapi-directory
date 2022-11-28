from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentFilter:
    r"""SegmentFilter
    SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.
    """
    
    not_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not') }})
    sequence_segment: Optional[SequenceSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceSegment') }})
    simple_segment: Optional[SimpleSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleSegment') }})
    
