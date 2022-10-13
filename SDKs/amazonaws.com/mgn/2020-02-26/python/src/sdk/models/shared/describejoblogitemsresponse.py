from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import joblog


@dataclass_json
@dataclass
class DescribeJobLogItemsResponse:
    items: Optional[List[joblog.JobLog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
