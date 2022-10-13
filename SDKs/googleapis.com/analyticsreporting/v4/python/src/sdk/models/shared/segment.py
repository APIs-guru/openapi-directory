from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dynamicsegment


@dataclass_json
@dataclass
class Segment:
    dynamic_segment: Optional[dynamicsegment.DynamicSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicSegment' }})
    segment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentId' }})
    
