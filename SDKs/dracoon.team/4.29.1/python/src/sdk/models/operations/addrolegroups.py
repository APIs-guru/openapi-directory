from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddRoleGroupsPathParams:
    role_id: int = field(metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRoleGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRoleGroupsRequest:
    headers: AddRoleGroupsHeaders = field()
    path_params: AddRoleGroupsPathParams = field()
    request: shared.GroupIds = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddRoleGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_group_list: Optional[shared.RoleGroupList] = field(default=None)
    
