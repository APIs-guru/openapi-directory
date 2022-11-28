from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetOAuthToken200ApplicationJSON:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    refresh_token_expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token_expires_in') }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    

@dataclass
class GetOAuthTokenRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetOAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    get_o_auth_token_200_application_json_object: Optional[GetOAuthToken200ApplicationJSON] = field(default=None)
    
