from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rebuildrequest


@dataclass_json
@dataclass
class RebuildWorkspacesRequest:
    rebuild_workspace_requests: List[rebuildrequest.RebuildRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RebuildWorkspaceRequests' }})
    
