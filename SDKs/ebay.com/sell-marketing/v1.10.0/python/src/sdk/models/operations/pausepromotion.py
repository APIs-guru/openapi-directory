from dataclasses import dataclass, field



@dataclass
class PausePromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PausePromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PausePromotionRequest:
    path_params: PausePromotionPathParams = field(default=None)
    security: PausePromotionSecurity = field(default=None)
    

@dataclass
class PausePromotionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
