from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regexpatternsetsummary


@dataclass_json
@dataclass
class ListRegexPatternSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    regex_pattern_sets: Optional[List[regexpatternsetsummary.RegexPatternSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegexPatternSets' }})
    
