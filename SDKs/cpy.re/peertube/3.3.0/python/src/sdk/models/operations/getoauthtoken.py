from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetOAuthTokenRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass_json
@dataclass
class GetOAuthToken200ApplicationJSON:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    refresh_token_expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token_expires_in' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    

@dataclass
class GetOAuthTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_o_auth_token_200_application_json_object: Optional[GetOAuthToken200ApplicationJSON] = field(default=None)
    
