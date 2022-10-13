from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetaccesstokenIDRequestBody:
    get_access_token_using_authorization_code: Optional[shared.AccessToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Get access token using authorization code' }})
    get_access_token_using_device_code_and_otp: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Get access token using device code and OTP' }})
    get_access_token_using_refresh_token: Optional[shared.RefreshToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Get access token using refresh token' }})
    

@dataclass
class GetaccesstokenIDRequest:
    request: GetaccesstokenIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetaccesstokenIDResponse:
    access_response: Optional[shared.AccessResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
