from dataclasses import dataclass, field
from typing import Any


@dataclass
class AddVideoBlockPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoBlockSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoBlockRequest:
    path_params: AddVideoBlockPathParams = field(default=None)
    security: AddVideoBlockSecurity = field(default=None)
    

@dataclass
class AddVideoBlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
