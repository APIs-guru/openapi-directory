from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetTokenRevocationIDRequestBodyTokenTypeHintEnum(str, Enum):
    REFRESH_TOKEN = "refresh_token"
    ACCESS_TOKEN = "access_token"


@dataclass_json
@dataclass
class GetTokenRevocationIDRequestBody:
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    token_type_hint: Optional[GetTokenRevocationIDRequestBodyTokenTypeHintEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type_hint' }})
    

@dataclass
class GetTokenRevocationIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTokenRevocationIDRequest:
    request: Optional[GetTokenRevocationIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetTokenRevocationIDSecurity = field(default=None)
    

@dataclass
class GetTokenRevocationIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
