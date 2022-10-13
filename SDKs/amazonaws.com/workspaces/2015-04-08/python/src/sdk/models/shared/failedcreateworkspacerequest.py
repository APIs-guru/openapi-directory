from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workspacerequest


@dataclass_json
@dataclass
class FailedCreateWorkspaceRequest:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    workspace_request: Optional[workspacerequest.WorkspaceRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkspaceRequest' }})
    
