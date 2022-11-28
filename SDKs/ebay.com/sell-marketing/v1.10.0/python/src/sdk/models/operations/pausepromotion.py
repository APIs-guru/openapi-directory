from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PausePromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PausePromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PausePromotionRequest:
    path_params: PausePromotionPathParams = field()
    security: PausePromotionSecurity = field()
    

@dataclass
class PausePromotionResponse:
    content_type: str = field()
    status_code: int = field()
    
