from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import querystatus_enum


@dataclass_json
@dataclass
class DescribeQueriesRequest:
    log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    status: Optional[querystatus_enum.QueryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
