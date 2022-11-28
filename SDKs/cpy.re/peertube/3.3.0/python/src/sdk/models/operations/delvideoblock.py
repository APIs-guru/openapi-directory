from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class DelVideoBlockPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoBlockSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoBlockRequest:
    path_params: DelVideoBlockPathParams = field()
    security: DelVideoBlockSecurity = field()
    

@dataclass
class DelVideoBlockResponse:
    content_type: str = field()
    status_code: int = field()
    
