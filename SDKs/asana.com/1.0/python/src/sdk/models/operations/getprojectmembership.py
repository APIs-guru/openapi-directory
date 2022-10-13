from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProjectMembershipPathParams:
    project_membership_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_membership_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectMembershipQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectMembershipRequest:
    path_params: GetProjectMembershipPathParams = field(default=None)
    query_params: GetProjectMembershipQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetProjectMembership200ApplicationJSON:
    data: Optional[shared.ProjectMembershipResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetProjectMembershipResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_project_membership_200_application_json_object: Optional[GetProjectMembership200ApplicationJSON] = field(default=None)
    
