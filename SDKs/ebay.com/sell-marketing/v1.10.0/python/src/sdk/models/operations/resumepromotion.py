from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ResumePromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumePromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResumePromotionRequest:
    path_params: ResumePromotionPathParams = field()
    security: ResumePromotionSecurity = field()
    

@dataclass
class ResumePromotionResponse:
    content_type: str = field()
    status_code: int = field()
    
