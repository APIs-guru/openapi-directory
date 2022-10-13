from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import workspacerequest


@dataclass_json
@dataclass
class CreateWorkspacesRequest:
    workspaces: List[workspacerequest.WorkspaceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workspaces' }})
    
