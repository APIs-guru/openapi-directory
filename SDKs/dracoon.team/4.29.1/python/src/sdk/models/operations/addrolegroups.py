from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddRoleGroupsPathParams:
    role_id: int = field(default=None, metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRoleGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRoleGroupsRequest:
    path_params: AddRoleGroupsPathParams = field(default=None)
    headers: AddRoleGroupsHeaders = field(default=None)
    request: shared.GroupIds = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddRoleGroupsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_group_list: Optional[shared.RoleGroupList] = field(default=None)
    status_code: int = field(default=None)
    
