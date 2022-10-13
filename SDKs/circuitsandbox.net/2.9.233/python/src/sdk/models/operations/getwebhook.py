from dataclasses import dataclass, field



@dataclass
class GetWebHookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWebHookRequest:
    security: GetWebHookSecurity = field(default=None)
    

@dataclass
class GetWebHookResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
