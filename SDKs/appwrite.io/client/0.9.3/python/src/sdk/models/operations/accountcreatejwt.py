from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCreateJwtSecurity:
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateJwtRequest:
    security: AccountCreateJwtSecurity = field()
    

@dataclass
class AccountCreateJwtResponse:
    content_type: str = field()
    status_code: int = field()
    jwt: Optional[shared.Jwt] = field(default=None)
    
