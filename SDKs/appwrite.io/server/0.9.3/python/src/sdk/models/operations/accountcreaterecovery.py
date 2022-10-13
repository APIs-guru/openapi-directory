from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class AccountCreateRecoveryRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class AccountCreateRecoverySecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateRecoveryRequest:
    request: Optional[AccountCreateRecoveryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AccountCreateRecoverySecurity = field(default=None)
    

@dataclass
class AccountCreateRecoveryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    token: Optional[shared.Token] = field(default=None)
    
