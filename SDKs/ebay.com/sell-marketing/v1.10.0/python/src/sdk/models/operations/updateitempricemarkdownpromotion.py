from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateItemPriceMarkdownPromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemPriceMarkdownPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateItemPriceMarkdownPromotionRequest:
    path_params: UpdateItemPriceMarkdownPromotionPathParams = field()
    security: UpdateItemPriceMarkdownPromotionSecurity = field()
    request: Optional[shared.ItemPriceMarkdown] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateItemPriceMarkdownPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    update_item_price_markdown_promotion_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
