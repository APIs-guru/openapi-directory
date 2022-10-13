from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orfiltersforsegment


@dataclass_json
@dataclass
class SimpleSegment:
    or_filters_for_segment: Optional[List[orfiltersforsegment.OrFiltersForSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orFiltersForSegment' }})
    
