from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import startrequest


@dataclass_json
@dataclass
class StartWorkspacesRequest:
    start_workspace_requests: List[startrequest.StartRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartWorkspaceRequests' }})
    
