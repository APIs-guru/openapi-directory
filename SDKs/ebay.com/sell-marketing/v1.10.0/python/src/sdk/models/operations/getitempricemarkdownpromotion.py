from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemPriceMarkdownPromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemPriceMarkdownPromotionRequest:
    path_params: GetItemPriceMarkdownPromotionPathParams = field(default=None)
    security: GetItemPriceMarkdownPromotionSecurity = field(default=None)
    

@dataclass
class GetItemPriceMarkdownPromotionResponse:
    content_type: str = field(default=None)
    item_price_markdown: Optional[shared.ItemPriceMarkdown] = field(default=None)
    status_code: int = field(default=None)
    
