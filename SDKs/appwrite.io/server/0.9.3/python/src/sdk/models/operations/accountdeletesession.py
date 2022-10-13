from dataclasses import dataclass, field



@dataclass
class AccountDeleteSessionPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteSessionSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountDeleteSessionRequest:
    path_params: AccountDeleteSessionPathParams = field(default=None)
    security: AccountDeleteSessionSecurity = field(default=None)
    

@dataclass
class AccountDeleteSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
