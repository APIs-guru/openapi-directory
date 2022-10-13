from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserByIDSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserByIDRequest:
    path_params: GetUserByIDPathParams = field(default=None)
    security: GetUserByIDSecurity = field(default=None)
    

@dataclass
class GetUserByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[Any] = field(default=None)
    
