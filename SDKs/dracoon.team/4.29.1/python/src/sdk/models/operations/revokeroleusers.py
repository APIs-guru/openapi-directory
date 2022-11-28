from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RevokeRoleUsersPathParams:
    role_id: int = field(metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoleUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RevokeRoleUsersRequest:
    headers: RevokeRoleUsersHeaders = field()
    path_params: RevokeRoleUsersPathParams = field()
    request: shared.UserIds = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RevokeRoleUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_user_list: Optional[shared.RoleUserList] = field(default=None)
    
