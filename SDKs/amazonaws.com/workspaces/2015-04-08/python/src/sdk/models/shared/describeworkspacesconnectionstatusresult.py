from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspaceconnectionstatus


@dataclass_json
@dataclass
class DescribeWorkspacesConnectionStatusResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workspaces_connection_status: Optional[List[workspaceconnectionstatus.WorkspaceConnectionStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspacesConnectionStatus' }})
    
