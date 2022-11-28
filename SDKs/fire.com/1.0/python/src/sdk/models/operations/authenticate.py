from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthenticateAuthenticationGrantTypeEnum(str, Enum):
    ACCESS_TOKEN = "AccessToken"


@dataclass_json
@dataclass
class AuthenticateAuthentication:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    grant_type: Optional[AuthenticateAuthenticationGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grantType') }})
    nonce: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    

@dataclass_json
@dataclass
class AuthenticateAccessToken:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    api_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiApplicationId') }})
    business_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessId') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass
class AuthenticateRequest:
    request: AuthenticateAuthentication = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AuthenticateResponse:
    content_type: str = field()
    status_code: int = field()
    access_token: Optional[AuthenticateAccessToken] = field(default=None)
    
