from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import segmentdefinition
from . import segmentdefinition


@dataclass_json
@dataclass
class DynamicSegment:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    session_segment: Optional[segmentdefinition.SegmentDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionSegment' }})
    user_segment: Optional[segmentdefinition.SegmentDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userSegment' }})
    
