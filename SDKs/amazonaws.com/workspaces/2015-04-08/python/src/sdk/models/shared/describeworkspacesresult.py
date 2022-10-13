from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspace


@dataclass_json
@dataclass
class DescribeWorkspacesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workspaces: Optional[List[workspace.Workspace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workspaces' }})
    
