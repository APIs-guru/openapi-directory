from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserPresencePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserPresenceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPresenceRequest:
    path_params: GetUserPresencePathParams = field(default=None)
    security: GetUserPresenceSecurity = field(default=None)
    

@dataclass
class GetUserPresenceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    presence: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
