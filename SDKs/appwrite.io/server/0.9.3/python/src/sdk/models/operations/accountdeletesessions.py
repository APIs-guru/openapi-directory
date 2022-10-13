from dataclasses import dataclass, field



@dataclass
class AccountDeleteSessionsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountDeleteSessionsRequest:
    security: AccountDeleteSessionsSecurity = field(default=None)
    

@dataclass
class AccountDeleteSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
