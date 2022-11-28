from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveWebHookPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveWebHookSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveWebHookRequest:
    path_params: RemoveWebHookPathParams = field()
    security: RemoveWebHookSecurity = field()
    

@dataclass
class RemoveWebHookResponse:
    content_type: str = field()
    status_code: int = field()
    
