from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segmentfilter


@dataclass_json
@dataclass
class SegmentDefinition:
    segment_filters: Optional[List[segmentfilter.SegmentFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentFilters' }})
    
