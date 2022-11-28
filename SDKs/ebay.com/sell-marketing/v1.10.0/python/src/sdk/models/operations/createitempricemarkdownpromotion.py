from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateItemPriceMarkdownPromotionRequest:
    security: CreateItemPriceMarkdownPromotionSecurity = field()
    request: Optional[shared.ItemPriceMarkdown] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateItemPriceMarkdownPromotionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    create_item_price_markdown_promotion_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
