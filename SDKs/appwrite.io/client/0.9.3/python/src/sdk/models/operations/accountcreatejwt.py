from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCreateJwtSecurity:
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateJwtRequest:
    security: AccountCreateJwtSecurity = field(default=None)
    

@dataclass
class AccountCreateJwtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    jwt: Optional[shared.Jwt] = field(default=None)
    
