from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import terminaterequest


@dataclass_json
@dataclass
class TerminateWorkspacesRequest:
    terminate_workspace_requests: List[terminaterequest.TerminateRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TerminateWorkspaceRequests' }})
    
