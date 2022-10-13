from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspacesipgroup


@dataclass_json
@dataclass
class DescribeIPGroupsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    result: Optional[List[workspacesipgroup.WorkspacesIPGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    
