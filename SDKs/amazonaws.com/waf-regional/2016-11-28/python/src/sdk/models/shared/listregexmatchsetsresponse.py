from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regexmatchsetsummary


@dataclass_json
@dataclass
class ListRegexMatchSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    regex_match_sets: Optional[List[regexmatchsetsummary.RegexMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexMatchSets' }})
    
