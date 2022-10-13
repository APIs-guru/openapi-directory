from dataclasses import dataclass, field



@dataclass
class ResumePromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumePromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResumePromotionRequest:
    path_params: ResumePromotionPathParams = field(default=None)
    security: ResumePromotionSecurity = field(default=None)
    

@dataclass
class ResumePromotionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
