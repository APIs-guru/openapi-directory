from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sqlinjectionmatchsetsummary


@dataclass_json
@dataclass
class ListSQLInjectionMatchSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    sql_injection_match_sets: Optional[List[sqlinjectionmatchsetsummary.SQLInjectionMatchSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqlInjectionMatchSets' }})
    
