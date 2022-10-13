from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import xssmatchsetsummary


@dataclass_json
@dataclass
class ListXSSMatchSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    xss_match_sets: Optional[List[xssmatchsetsummary.XSSMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'XssMatchSets' }})
    
