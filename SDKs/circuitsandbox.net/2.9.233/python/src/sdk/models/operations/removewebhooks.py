from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveWebHooksSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveWebHooksRequest:
    security: RemoveWebHooksSecurity = field()
    

@dataclass
class RemoveWebHooksResponse:
    content_type: str = field()
    status_code: int = field()
    
