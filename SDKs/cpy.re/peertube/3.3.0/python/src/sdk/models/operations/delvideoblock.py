from dataclasses import dataclass, field
from typing import Any


@dataclass
class DelVideoBlockPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoBlockSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoBlockRequest:
    path_params: DelVideoBlockPathParams = field(default=None)
    security: DelVideoBlockSecurity = field(default=None)
    

@dataclass
class DelVideoBlockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
