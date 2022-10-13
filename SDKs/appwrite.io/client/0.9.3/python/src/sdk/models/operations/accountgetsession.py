from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetSessionPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountGetSessionSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetSessionRequest:
    path_params: AccountGetSessionPathParams = field(default=None)
    security: AccountGetSessionSecurity = field(default=None)
    

@dataclass
class AccountGetSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    session: Optional[shared.Session] = field(default=None)
    
