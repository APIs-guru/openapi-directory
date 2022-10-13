from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventcondition
from . import segmentcondition
from . import segmentdimensions


@dataclass_json
@dataclass
class SimpleCondition:
    event_condition: Optional[eventcondition.EventCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCondition' }})
    segment_condition: Optional[segmentcondition.SegmentCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentCondition' }})
    segment_dimensions: Optional[segmentdimensions.SegmentDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentDimensions' }})
    
