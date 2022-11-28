from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveUserPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserRequest:
    headers: RemoveUserHeaders = field()
    path_params: RemoveUserPathParams = field()
    

@dataclass
class RemoveUserResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
