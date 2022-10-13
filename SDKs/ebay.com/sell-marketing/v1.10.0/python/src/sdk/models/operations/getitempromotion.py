from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemPromotionPathParams:
    promotion_id: str = field(default=None, metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItemPromotionRequest:
    path_params: GetItemPromotionPathParams = field(default=None)
    security: GetItemPromotionSecurity = field(default=None)
    

@dataclass
class GetItemPromotionResponse:
    content_type: str = field(default=None)
    item_promotion_response: Optional[shared.ItemPromotionResponse] = field(default=None)
    status_code: int = field(default=None)
    
