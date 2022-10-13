from dataclasses import dataclass, field



@dataclass
class GetActiveSessionsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetActiveSessionsRequest:
    security: GetActiveSessionsSecurity = field(default=None)
    

@dataclass
class GetActiveSessionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
