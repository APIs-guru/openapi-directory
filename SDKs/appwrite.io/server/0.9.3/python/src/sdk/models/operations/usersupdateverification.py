from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UsersUpdateVerificationPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersUpdateVerificationRequestBody:
    email_verification: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerification') }})
    

@dataclass
class UsersUpdateVerificationSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersUpdateVerificationRequest:
    path_params: UsersUpdateVerificationPathParams = field()
    security: UsersUpdateVerificationSecurity = field()
    request: Optional[UsersUpdateVerificationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersUpdateVerificationResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
