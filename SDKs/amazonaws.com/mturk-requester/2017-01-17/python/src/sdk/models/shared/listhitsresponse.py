from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hit


@dataclass_json
@dataclass
class ListHiTsResponse:
    hi_ts: Optional[List[hit.Hit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumResults' }})
    
