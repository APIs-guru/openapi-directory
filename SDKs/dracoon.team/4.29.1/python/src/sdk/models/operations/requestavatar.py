from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAvatarHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestAvatarRequest:
    headers: RequestAvatarHeaders = field(default=None)
    

@dataclass
class RequestAvatarResponse:
    avatar: Optional[shared.Avatar] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
