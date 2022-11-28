from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum(str, Enum):
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"

class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum(str, Enum):
    OMS = "oms"


@dataclass_json
@dataclass
class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    refresh_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    scope: PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    

@dataclass_json
@dataclass
class PostOauthAccessTokenAccessTokenResponseV2:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refresh_token') }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    

@dataclass
class PostOauthAccessTokenRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOauthAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    access_token_response_v2: Optional[PostOauthAccessTokenAccessTokenResponseV2] = field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared.OneordersGetResponses404ContentApplication1jsonSchema] = field(default=None)
    
