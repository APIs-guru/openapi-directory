from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetWorkspaceMembershipsForWorkspacePathParams:
    workspace_gid: str = field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceMembershipsForWorkspaceQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetWorkspaceMembershipsForWorkspace200ApplicationJSON:
    data: Optional[List[shared.WorkspaceMembershipCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetWorkspaceMembershipsForWorkspaceRequest:
    path_params: GetWorkspaceMembershipsForWorkspacePathParams = field()
    query_params: GetWorkspaceMembershipsForWorkspaceQueryParams = field()
    

@dataclass
class GetWorkspaceMembershipsForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    get_workspace_memberships_for_workspace_200_application_json_object: Optional[GetWorkspaceMembershipsForWorkspace200ApplicationJSON] = field(default=None)
    
