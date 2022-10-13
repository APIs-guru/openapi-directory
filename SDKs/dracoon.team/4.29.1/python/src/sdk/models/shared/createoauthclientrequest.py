from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    access_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessTokenValidity' }})
    approval_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalValidity' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    client_type: Optional[CreateOAuthClientRequestClientTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientType' }})
    grant_types: List[CreateOAuthClientRequestGrantTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantTypes' }})
    redirect_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUris' }})
    refresh_token_validity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshTokenValidity' }})
    
