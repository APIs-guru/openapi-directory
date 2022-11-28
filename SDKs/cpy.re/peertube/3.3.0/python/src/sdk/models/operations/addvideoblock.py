from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class AddVideoBlockPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoBlockSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoBlockRequest:
    path_params: AddVideoBlockPathParams = field()
    security: AddVideoBlockSecurity = field()
    

@dataclass
class AddVideoBlockResponse:
    content_type: str = field()
    status_code: int = field()
    
