from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AccountUpdateRecoveryRequestBody:
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    password_again: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordAgain') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass
class AccountUpdateRecoverySecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountUpdateRecoveryRequest:
    security: AccountUpdateRecoverySecurity = field()
    request: Optional[AccountUpdateRecoveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountUpdateRecoveryResponse:
    content_type: str = field()
    status_code: int = field()
    token: Optional[shared.Token] = field(default=None)
    
