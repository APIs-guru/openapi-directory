from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateWorkspacePathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBodyWorkspaceCollections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBodyWorkspaceEnvironments:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBodyWorkspaceMocks:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBodyWorkspaceMonitors:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBodyWorkspace:
    collections: Optional[List[UpdateWorkspaceRequestBodyWorkspaceCollections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collections' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environments: Optional[List[UpdateWorkspaceRequestBodyWorkspaceEnvironments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environments' }})
    mocks: Optional[List[UpdateWorkspaceRequestBodyWorkspaceMocks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mocks' }})
    monitors: Optional[List[UpdateWorkspaceRequestBodyWorkspaceMonitors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateWorkspaceRequestBody:
    workspace: Optional[UpdateWorkspaceRequestBodyWorkspace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    

@dataclass
class UpdateWorkspaceRequest:
    path_params: UpdateWorkspacePathParams = field(default=None)
    request: Optional[UpdateWorkspaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class UpdateWorkspace200ApplicationJSONWorkspace:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateWorkspace200ApplicationJSON:
    workspace: Optional[UpdateWorkspace200ApplicationJSONWorkspace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    

@dataclass_json
@dataclass
class UpdateWorkspace403ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateWorkspace403ApplicationJSON:
    error: Optional[UpdateWorkspace403ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass_json
@dataclass
class UpdateWorkspace404ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class UpdateWorkspace404ApplicationJSON:
    error: Optional[UpdateWorkspace404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class UpdateWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_workspace_200_application_json_object: Optional[UpdateWorkspace200ApplicationJSON] = field(default=None)
    update_workspace_403_application_json_object: Optional[UpdateWorkspace403ApplicationJSON] = field(default=None)
    update_workspace_404_application_json_object: Optional[UpdateWorkspace404ApplicationJSON] = field(default=None)
    
