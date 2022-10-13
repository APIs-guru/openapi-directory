from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class UpdateOAuthClientRequestClientTypeEnum(str, Enum):
    CONFIDENTIAL = "confidential"
    PUBLIC = "public"

class UpdateOAuthClientRequestGrantTypesEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"
    IMPLICIT = "implicit"
    PASSWORD = "password"
    REFRESH_TOKEN = "refresh_token"


@dataclass_json
@dataclass
class UpdateOAuthClientRequest:
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTokenValidity' }})
    approval_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalValidity' }})
    client_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    client_type: Optional[UpdateOAuthClientRequestClientTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientType' }})
    grant_types: List[UpdateOAuthClientRequestGrantTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantTypes' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    redirect_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUris' }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshTokenValidity' }})
    
