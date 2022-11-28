from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AccountCreateRecoveryRequestBody:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class AccountCreateRecoverySecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateRecoveryRequest:
    security: AccountCreateRecoverySecurity = field()
    request: Optional[AccountCreateRecoveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountCreateRecoveryResponse:
    content_type: str = field()
    status_code: int = field()
    token: Optional[shared.Token] = field(default=None)
    
