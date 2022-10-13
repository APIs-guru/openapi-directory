from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventfilter


@dataclass_json
@dataclass
class EventStartCondition:
    event_filter: Optional[eventfilter.EventFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventFilter' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SegmentId' }})
    
