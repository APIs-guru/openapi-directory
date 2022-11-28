from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetTokenRevocationIDRequestBodyTokenTypeHintEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"
    ACCESS_TOKEN = "access_token"


@dataclass_json
@dataclass
class GetTokenRevocationIDRequestBody:
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_type_hint: Optional[GetTokenRevocationIDRequestBodyTokenTypeHintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type_hint') }})
    

@dataclass
class GetTokenRevocationIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTokenRevocationIDRequest:
    security: GetTokenRevocationIDSecurity = field()
    request: Optional[GetTokenRevocationIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTokenRevocationIDResponse:
    content_type: str = field()
    status_code: int = field()
    
