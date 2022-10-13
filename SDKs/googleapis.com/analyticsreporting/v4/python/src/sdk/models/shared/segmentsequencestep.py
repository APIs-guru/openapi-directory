from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import orfiltersforsegment

class SegmentSequenceStepMatchTypeEnum(str, Enum):
    UNSPECIFIED_MATCH_TYPE = "UNSPECIFIED_MATCH_TYPE"
    PRECEDES = "PRECEDES"
    IMMEDIATELY_PRECEDES = "IMMEDIATELY_PRECEDES"


@dataclass_json
@dataclass
class SegmentSequenceStep:
    match_type: Optional[SegmentSequenceStepMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchType' }})
    or_filters_for_segment: Optional[List[orfiltersforsegment.OrFiltersForSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orFiltersForSegment' }})
    
