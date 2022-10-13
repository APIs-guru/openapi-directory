from dataclasses import dataclass, field



@dataclass
class DeleteItemPromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteItemPromotionRequest:
    path_params: DeleteItemPromotionPathParams = field(default=None)
    security: DeleteItemPromotionSecurity = field(default=None)
    

@dataclass
class DeleteItemPromotionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
