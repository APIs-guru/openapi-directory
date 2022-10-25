from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AuthenticateAuthenticationGrantTypeEnum(str, Enum):
    ACCESS_TOKEN = "AccessToken"


@dataclass_json
@dataclass
class AuthenticateAuthentication:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    grant_type: Optional[AuthenticateAuthenticationGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantType' }})
    nonce: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    

@dataclass
class AuthenticateRequest:
    request: AuthenticateAuthentication = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AuthenticateAccessToken:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    api_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiApplicationId' }})
    business_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessId' }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class AuthenticateResponse:
    access_token: Optional[AuthenticateAccessToken] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
