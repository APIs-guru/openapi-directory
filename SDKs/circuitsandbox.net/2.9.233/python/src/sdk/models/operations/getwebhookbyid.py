from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetWebHookByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebHookByIDSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWebHookByIDRequest:
    path_params: GetWebHookByIDPathParams = field()
    security: GetWebHookByIDSecurity = field()
    

@dataclass
class GetWebHookByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
