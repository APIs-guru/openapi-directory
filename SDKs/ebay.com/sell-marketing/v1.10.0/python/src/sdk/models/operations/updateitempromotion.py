from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateItemPromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateItemPromotionRequest:
    path_params: UpdateItemPromotionPathParams = field(default=None)
    request: Optional[shared.ItemPromotion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateItemPromotionSecurity = field(default=None)
    

@dataclass
class UpdateItemPromotionResponse:
    base_response: Optional[shared.BaseResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
