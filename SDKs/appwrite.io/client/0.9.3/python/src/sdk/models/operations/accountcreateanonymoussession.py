from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCreateAnonymousSessionSecurity:
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateAnonymousSessionRequest:
    security: AccountCreateAnonymousSessionSecurity = field()
    

@dataclass
class AccountCreateAnonymousSessionResponse:
    content_type: str = field()
    status_code: int = field()
    session: Optional[shared.Session] = field(default=None)
    
