from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetRequest:
    security: AccountGetSecurity = field()
    

@dataclass
class AccountGetResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
