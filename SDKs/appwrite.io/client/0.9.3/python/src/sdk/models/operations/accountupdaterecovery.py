from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class AccountUpdateRecoveryRequestBody:
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    password_again: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordAgain' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass
class AccountUpdateRecoverySecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountUpdateRecoveryRequest:
    request: Optional[AccountUpdateRecoveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AccountUpdateRecoverySecurity = field(default=None)
    

@dataclass
class AccountUpdateRecoveryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    token: Optional[shared.Token] = field(default=None)
    
