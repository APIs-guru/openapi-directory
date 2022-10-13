from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class JoinSpacePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JoinSpaceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JoinSpaceRequest:
    path_params: JoinSpacePathParams = field(default=None)
    security: JoinSpaceSecurity = field(default=None)
    

@dataclass
class JoinSpaceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participant_space_wrapper: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
