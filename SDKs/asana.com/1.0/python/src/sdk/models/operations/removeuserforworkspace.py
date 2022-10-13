from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RemoveUserForWorkspacePathParams:
    workspace_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserForWorkspaceQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveUserForWorkspaceRequestBody:
    data: Optional[shared.WorkspaceRemoveUserRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveUserForWorkspaceRequest:
    path_params: RemoveUserForWorkspacePathParams = field(default=None)
    query_params: RemoveUserForWorkspaceQueryParams = field(default=None)
    request: RemoveUserForWorkspaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class RemoveUserForWorkspace204ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveUserForWorkspaceResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    remove_user_for_workspace_204_application_json_object: Optional[RemoveUserForWorkspace204ApplicationJSON] = field(default=None)
    
