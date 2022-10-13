from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sequencesegment
from . import simplesegment


@dataclass_json
@dataclass
class SegmentFilter:
    not_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not' }})
    sequence_segment: Optional[sequencesegment.SequenceSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceSegment' }})
    simple_segment: Optional[simplesegment.SimpleSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleSegment' }})
    
