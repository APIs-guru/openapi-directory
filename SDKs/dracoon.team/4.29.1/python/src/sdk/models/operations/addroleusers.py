from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddRoleUsersPathParams:
    role_id: int = field(default=None, metadata={'path_param': { 'field_name': 'role_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRoleUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRoleUsersRequest:
    path_params: AddRoleUsersPathParams = field(default=None)
    headers: AddRoleUsersHeaders = field(default=None)
    request: shared.UserIds = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddRoleUsersResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_user_list: Optional[shared.RoleUserList] = field(default=None)
    status_code: int = field(default=None)
    
