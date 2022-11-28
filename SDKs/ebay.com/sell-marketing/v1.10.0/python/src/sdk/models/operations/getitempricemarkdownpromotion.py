from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemPriceMarkdownPromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemPriceMarkdownPromotionRequest:
    path_params: GetItemPriceMarkdownPromotionPathParams = field()
    security: GetItemPriceMarkdownPromotionSecurity = field()
    

@dataclass
class GetItemPriceMarkdownPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    item_price_markdown: Optional[shared.ItemPriceMarkdown] = field(default=None)
    
