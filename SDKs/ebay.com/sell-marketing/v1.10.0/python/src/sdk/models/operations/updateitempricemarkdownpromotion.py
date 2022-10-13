from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateItemPriceMarkdownPromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateItemPriceMarkdownPromotionRequest:
    path_params: UpdateItemPriceMarkdownPromotionPathParams = field(default=None)
    request: Optional[shared.ItemPriceMarkdown] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateItemPriceMarkdownPromotionSecurity = field(default=None)
    

@dataclass
class UpdateItemPriceMarkdownPromotionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_item_price_markdown_promotion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
