from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetWorkspaceMembershipsForUserPathParams:
    user_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceMembershipsForUserQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceMembershipsForUserRequest:
    path_params: GetWorkspaceMembershipsForUserPathParams = field(default=None)
    query_params: GetWorkspaceMembershipsForUserQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetWorkspaceMembershipsForUser200ApplicationJSON:
    data: Optional[List[shared.WorkspaceMembershipCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetWorkspaceMembershipsForUserResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_workspace_memberships_for_user_200_application_json_object: Optional[GetWorkspaceMembershipsForUser200ApplicationJSON] = field(default=None)
    
