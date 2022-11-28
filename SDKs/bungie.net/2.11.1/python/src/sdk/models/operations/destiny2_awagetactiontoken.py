from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Destiny2AwaGetActionTokenPathParams:
    correlation_id: str = field(metadata={'path_param': { 'field_name': 'correlationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2AwaGetActionTokenSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Destiny2AwaGetActionTokenRequest:
    path_params: Destiny2AwaGetActionTokenPathParams = field()
    security: Destiny2AwaGetActionTokenSecurity = field()
    

@dataclass
class Destiny2AwaGetActionTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
