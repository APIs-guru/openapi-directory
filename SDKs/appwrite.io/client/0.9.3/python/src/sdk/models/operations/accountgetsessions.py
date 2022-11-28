from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetSessionsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetSessionsRequest:
    security: AccountGetSessionsSecurity = field()
    

@dataclass
class AccountGetSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    session_list: Optional[shared.SessionList] = field(default=None)
    
