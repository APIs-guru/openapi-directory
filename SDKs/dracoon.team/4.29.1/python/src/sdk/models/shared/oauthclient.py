from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OAuthClientClientTypeEnum(str, Enum):
    CONFIDENTIAL = "confidential"
    PUBLIC = "public"

class OAuthClientGrantTypesEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"
    IMPLICIT = "implicit"
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclass
class OAuthClient:
    r"""OAuthClient
    OAuth client information
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    grant_types: List[OAuthClientGrantTypesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantTypes') }})
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokenValidity') }})
    approval_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalValidity') }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    client_type: Optional[OAuthClientClientTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientType') }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    is_external: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isExternal') }})
    is_standard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isStandard') }})
    redirect_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUris') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshTokenValidity') }})
    
