from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DeleteWorkspacePathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteWorkspace200ApplicationJSONWorkspace:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class DeleteWorkspace200ApplicationJSON:
    workspace: Optional[DeleteWorkspace200ApplicationJSONWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass
class DeleteWorkspaceRequest:
    path_params: DeleteWorkspacePathParams = field()
    

@dataclass
class DeleteWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    delete_workspace_200_application_json_object: Optional[DeleteWorkspace200ApplicationJSON] = field(default=None)
    
