from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveUserAttributePathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserAttributeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserAttributeRequest:
    headers: RemoveUserAttributeHeaders = field()
    path_params: RemoveUserAttributePathParams = field()
    

@dataclass
class RemoveUserAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
