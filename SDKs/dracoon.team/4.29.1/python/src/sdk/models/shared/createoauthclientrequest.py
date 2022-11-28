from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateOAuthClientRequestClientTypeEnum(str, Enum):
    CONFIDENTIAL = "confidential"
    PUBLIC = "public"

class CreateOAuthClientRequestGrantTypesEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"
    IMPLICIT = "implicit"
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclass
class CreateOAuthClientRequest:
    r"""CreateOAuthClientRequest
    Request model for creating an OAuth client
    """
    
    client_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    grant_types: List[CreateOAuthClientRequestGrantTypesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantTypes') }})
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTokenValidity') }})
    approval_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalValidity') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    client_type: Optional[CreateOAuthClientRequestClientTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientType') }})
    redirect_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUris') }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshTokenValidity') }})
    
