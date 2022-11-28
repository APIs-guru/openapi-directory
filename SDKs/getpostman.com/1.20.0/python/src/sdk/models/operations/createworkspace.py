from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateWorkspaceRequestBodyWorkspaceCollections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class CreateWorkspaceRequestBodyWorkspaceEnvironments:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class CreateWorkspaceRequestBodyWorkspaceMocks:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class CreateWorkspaceRequestBodyWorkspaceMonitors:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class CreateWorkspaceRequestBodyWorkspace:
    collections: Optional[List[CreateWorkspaceRequestBodyWorkspaceCollections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environments: Optional[List[CreateWorkspaceRequestBodyWorkspaceEnvironments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    mocks: Optional[List[CreateWorkspaceRequestBodyWorkspaceMocks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mocks') }})
    monitors: Optional[List[CreateWorkspaceRequestBodyWorkspaceMonitors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitors') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreateWorkspaceRequestBody:
    workspace: Optional[CreateWorkspaceRequestBodyWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclass
class CreateWorkspace200ApplicationJSONWorkspace:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CreateWorkspace200ApplicationJSON:
    workspace: Optional[CreateWorkspace200ApplicationJSONWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclass
class CreateWorkspace400ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CreateWorkspace400ApplicationJSON:
    error: Optional[CreateWorkspace400ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class CreateWorkspaceRequest:
    request: Optional[CreateWorkspaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    create_workspace_200_application_json_object: Optional[CreateWorkspace200ApplicationJSON] = field(default=None)
    create_workspace_400_application_json_object: Optional[CreateWorkspace400ApplicationJSON] = field(default=None)
    
