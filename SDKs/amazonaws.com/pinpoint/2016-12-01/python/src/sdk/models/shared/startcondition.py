from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventstartcondition
from . import segmentcondition


@dataclass_json
@dataclass
class StartCondition:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_start_condition: Optional[eventstartcondition.EventStartCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventStartCondition' }})
    segment_start_condition: Optional[segmentcondition.SegmentCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentStartCondition' }})
    
