from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bytematchsetsummary


@dataclass_json
@dataclass
class ListByteMatchSetsResponse:
    byte_match_sets: Optional[List[bytematchsetsummary.ByteMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByteMatchSets' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
