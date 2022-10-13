from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeLogGroupsRequest:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    log_group_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupNamePrefix' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
