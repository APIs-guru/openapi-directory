from dataclasses import dataclass, field



@dataclass
class RemoveWebHookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWebHookSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveWebHookRequest:
    path_params: RemoveWebHookPathParams = field(default=None)
    security: RemoveWebHookSecurity = field(default=None)
    

@dataclass
class RemoveWebHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
