from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loggroup


@dataclass_json
@dataclass
class DescribeLogGroupsResponse:
    log_groups: Optional[List[loggroup.LogGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
