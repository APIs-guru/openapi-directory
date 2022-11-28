from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetSessionPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountGetSessionSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountGetSessionRequest:
    path_params: AccountGetSessionPathParams = field()
    security: AccountGetSessionSecurity = field()
    

@dataclass
class AccountGetSessionResponse:
    content_type: str = field()
    status_code: int = field()
    session: Optional[shared.Session] = field(default=None)
    
