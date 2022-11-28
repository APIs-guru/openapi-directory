from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SingleWorkspacePathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SingleWorkspace200ApplicationJSONWorkspaceCollections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class SingleWorkspace200ApplicationJSONWorkspaceEnvironments:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclass
class SingleWorkspace200ApplicationJSONWorkspace:
    collections: Optional[List[SingleWorkspace200ApplicationJSONWorkspaceCollections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environments: Optional[List[SingleWorkspace200ApplicationJSONWorkspaceEnvironments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class SingleWorkspace200ApplicationJSON:
    workspace: Optional[SingleWorkspace200ApplicationJSONWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclass
class SingleWorkspace404ApplicationJSONError:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class SingleWorkspace404ApplicationJSON:
    error: Optional[SingleWorkspace404ApplicationJSONError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class SingleWorkspaceRequest:
    path_params: SingleWorkspacePathParams = field()
    

@dataclass
class SingleWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    single_workspace_200_application_json_object: Optional[SingleWorkspace200ApplicationJSON] = field(default=None)
    single_workspace_404_application_json_object: Optional[SingleWorkspace404ApplicationJSON] = field(default=None)
    
