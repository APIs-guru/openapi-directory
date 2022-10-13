from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AuthenticateRequestBodyGrantTypeEnum(str, Enum):
    ACCESS_TOKEN = "AccessToken"


@dataclass_json
@dataclass
class AuthenticateRequestBodyAuthentication:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    grant_type: Optional[AuthenticateRequestBodyGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grantType' }})
    nonce: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    

@dataclass
class AuthenticateRequest:
    request: AuthenticateRequestBodyAuthentication = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Authenticate200ApplicationJSONAccessToken:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    api_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiApplicationId' }})
    business_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessId' }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class AuthenticateResponse:
    access_token: Optional[Authenticate200ApplicationJSONAccessToken] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
