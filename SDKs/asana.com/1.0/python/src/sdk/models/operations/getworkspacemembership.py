from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetWorkspaceMembershipPathParams:
    workspace_membership_gid: str = field(metadata={'path_param': { 'field_name': 'workspace_membership_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceMembershipQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetWorkspaceMembership200ApplicationJSON:
    data: Optional[shared.WorkspaceMembershipResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetWorkspaceMembershipRequest:
    path_params: GetWorkspaceMembershipPathParams = field()
    query_params: GetWorkspaceMembershipQueryParams = field()
    

@dataclass
class GetWorkspaceMembershipResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_workspace_membership_200_application_json_object: Optional[GetWorkspaceMembership200ApplicationJSON] = field(default=None)
    
