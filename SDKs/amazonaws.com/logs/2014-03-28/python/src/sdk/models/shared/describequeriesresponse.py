from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queryinfo


@dataclass_json
@dataclass
class DescribeQueriesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    queries: Optional[List[queryinfo.QueryInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queries' }})
    
