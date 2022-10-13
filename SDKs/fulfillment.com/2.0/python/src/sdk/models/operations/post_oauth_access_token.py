from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PostOauthAccessTokenRequestBody1GrantTypeEnum(str, Enum):
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"

class PostOauthAccessTokenRequestBody1ScopeEnum(str, Enum):
    OMS = "oms"


@dataclass_json
@dataclass
class PostOauthAccessTokenRequestBody1AccessTokenRequestBaseV2:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    grant_type: PostOauthAccessTokenRequestBody1GrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    scope: PostOauthAccessTokenRequestBody1ScopeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
class PostOauthAccessTokenRequestBody2GrantTypeEnum(str, Enum):
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"

class PostOauthAccessTokenRequestBody2ScopeEnum(str, Enum):
    OMS = "oms"


@dataclass_json
@dataclass
class PostOauthAccessTokenRequestBody2AccessTokenRequestBaseV2:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    grant_type: PostOauthAccessTokenRequestBody2GrantTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grant_type' }})
    refresh_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    scope: PostOauthAccessTokenRequestBody2ScopeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    

@dataclass
class PostOauthAccessTokenRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostOauthAccessToken200ApplicationJSONAccessTokenResponseV2:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_token' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_type' }})
    

@dataclass
class PostOauthAccessTokenResponse:
    access_token_response_v2: Optional[PostOauthAccessToken200ApplicationJSONAccessTokenResponseV2] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
