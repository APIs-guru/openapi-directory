from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import searchrecord


@dataclass_json
@dataclass
class SearchResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    results: Optional[List[searchrecord.SearchRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
