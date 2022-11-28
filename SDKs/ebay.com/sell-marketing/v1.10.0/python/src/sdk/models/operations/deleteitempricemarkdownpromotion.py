from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteItemPriceMarkdownPromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteItemPriceMarkdownPromotionRequest:
    path_params: DeleteItemPriceMarkdownPromotionPathParams = field()
    security: DeleteItemPriceMarkdownPromotionSecurity = field()
    

@dataclass
class DeleteItemPriceMarkdownPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    
