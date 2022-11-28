from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RevokeRoleGroupsPathParams:
    role_id: int = field(metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoleGroupsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoleGroupsRequest:
    headers: RevokeRoleGroupsHeaders = field()
    path_params: RevokeRoleGroupsPathParams = field()
    request: shared.GroupIds = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RevokeRoleGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_group_list: Optional[shared.RoleGroupList] = field(default=None)
    
