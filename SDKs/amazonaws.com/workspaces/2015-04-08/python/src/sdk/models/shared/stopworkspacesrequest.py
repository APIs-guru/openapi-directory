from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import stoprequest


@dataclass_json
@dataclass
class StopWorkspacesRequest:
    stop_workspace_requests: List[stoprequest.StopRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopWorkspaceRequests' }})
    
