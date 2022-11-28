from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AccountDeleteSessionPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteSessionSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountDeleteSessionRequest:
    path_params: AccountDeleteSessionPathParams = field()
    security: AccountDeleteSessionSecurity = field()
    

@dataclass
class AccountDeleteSessionResponse:
    content_type: str = field()
    status_code: int = field()
    
