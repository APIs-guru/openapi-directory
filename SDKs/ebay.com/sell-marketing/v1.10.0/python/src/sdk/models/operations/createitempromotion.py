from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateItemPromotionRequest:
    security: CreateItemPromotionSecurity = field()
    request: Optional[shared.ItemPromotion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateItemPromotionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    base_response: Optional[shared.BaseResponse] = field(default=None)
    
