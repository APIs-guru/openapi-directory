from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class JoinSpacePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JoinSpaceSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class JoinSpaceRequest:
    path_params: JoinSpacePathParams = field()
    security: JoinSpaceSecurity = field()
    

@dataclass
class JoinSpaceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participant_space_wrapper: Optional[Any] = field(default=None)
    
