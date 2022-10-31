from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RevokeRoleUsersPathParams:
    role_id: int = field(default=None, metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoleUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoleUsersRequest:
    path_params: RevokeRoleUsersPathParams = field(default=None)
    headers: RevokeRoleUsersHeaders = field(default=None)
    request: shared.UserIds = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RevokeRoleUsersResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_user_list: Optional[shared.RoleUserList] = field(default=None)
    status_code: int = field(default=None)
    
