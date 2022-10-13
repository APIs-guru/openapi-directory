from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AccountGetSessionsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetSessionsRequest:
    security: AccountGetSessionsSecurity = field(default=None)
    

@dataclass
class AccountGetSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    session_list: Optional[shared.SessionList] = field(default=None)
    
