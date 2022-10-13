from dataclasses import dataclass, field



@dataclass
class DeleteItemPriceMarkdownPromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteItemPriceMarkdownPromotionRequest:
    path_params: DeleteItemPriceMarkdownPromotionPathParams = field(default=None)
    security: DeleteItemPriceMarkdownPromotionSecurity = field(default=None)
    

@dataclass
class DeleteItemPriceMarkdownPromotionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
