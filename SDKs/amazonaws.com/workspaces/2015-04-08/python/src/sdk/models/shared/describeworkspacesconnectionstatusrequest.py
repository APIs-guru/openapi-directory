from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeWorkspacesConnectionStatusRequest:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workspace_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceIds' }})
    
