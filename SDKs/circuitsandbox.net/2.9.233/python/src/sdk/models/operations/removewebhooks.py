from dataclasses import dataclass, field



@dataclass
class RemoveWebHooksSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveWebHooksRequest:
    security: RemoveWebHooksSecurity = field(default=None)
    

@dataclass
class RemoveWebHooksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
