from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateItemPromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateItemPromotionRequest:
    path_params: UpdateItemPromotionPathParams = field()
    security: UpdateItemPromotionSecurity = field()
    request: Optional[shared.ItemPromotion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateItemPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    base_response: Optional[shared.BaseResponse] = field(default=None)
    
