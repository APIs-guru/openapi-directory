from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segmentsequencestep


@dataclass_json
@dataclass
class SequenceSegment:
    first_step_should_match_first_hit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstStepShouldMatchFirstHit' }})
    segment_sequence_steps: Optional[List[segmentsequencestep.SegmentSequenceStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentSequenceSteps' }})
    
