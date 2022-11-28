from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAvatarHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAvatarRequest:
    headers: RequestAvatarHeaders = field()
    

@dataclass
class RequestAvatarResponse:
    content_type: str = field()
    status_code: int = field()
    avatar: Optional[shared.Avatar] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
