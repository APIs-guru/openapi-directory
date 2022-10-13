from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountCreateAnonymousSessionSecurity:
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateAnonymousSessionRequest:
    security: AccountCreateAnonymousSessionSecurity = field(default=None)
    

@dataclass
class AccountCreateAnonymousSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    session: Optional[shared.Session] = field(default=None)
    
