from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteWorkspacePathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspaceRequest:
    path_params: DeleteWorkspacePathParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteWorkspace200ApplicationJSONWorkspace:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class DeleteWorkspace200ApplicationJSON:
    workspace: Optional[DeleteWorkspace200ApplicationJSONWorkspace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    

@dataclass
class DeleteWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_workspace_200_application_json_object: Optional[DeleteWorkspace200ApplicationJSON] = field(default=None)
    
