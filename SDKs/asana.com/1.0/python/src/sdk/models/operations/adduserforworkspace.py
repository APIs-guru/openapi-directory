from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddUserForWorkspacePathParams:
    workspace_gid: str = field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddUserForWorkspaceQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddUserForWorkspaceRequestBody:
    data: Optional[shared.WorkspaceAddUserRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddUserForWorkspace200ApplicationJSON:
    data: Optional[shared.UserResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddUserForWorkspaceRequest:
    path_params: AddUserForWorkspacePathParams = field()
    query_params: AddUserForWorkspaceQueryParams = field()
    request: AddUserForWorkspaceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddUserForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_user_for_workspace_200_application_json_object: Optional[AddUserForWorkspace200ApplicationJSON] = field(default=None)
    
