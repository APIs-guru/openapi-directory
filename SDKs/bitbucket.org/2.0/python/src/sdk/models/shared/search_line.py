from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import search_segment


@dataclass_json
@dataclass
class SearchLine:
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    segments: Optional[List[search_segment.SearchSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
