from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ChangeUserPasswordHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeUserPasswordRequest:
    headers: ChangeUserPasswordHeaders = field(default=None)
    request: shared.ChangeUserPasswordRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeUserPasswordResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    change_user_password_400_application_json_one_of: Optional[Any] = field(default=None)
    
