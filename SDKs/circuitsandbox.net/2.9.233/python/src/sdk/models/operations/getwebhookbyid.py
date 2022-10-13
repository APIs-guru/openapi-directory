from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWebHookByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWebHookByIDSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWebHookByIDRequest:
    path_params: GetWebHookByIDPathParams = field(default=None)
    security: GetWebHookByIDSecurity = field(default=None)
    

@dataclass
class GetWebHookByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    web_hook: Optional[Any] = field(default=None)
    
