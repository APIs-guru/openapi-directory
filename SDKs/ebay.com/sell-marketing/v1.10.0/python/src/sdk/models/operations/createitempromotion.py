from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateItemPromotionRequest:
    request: Optional[shared.ItemPromotion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateItemPromotionSecurity = field(default=None)
    

@dataclass
class CreateItemPromotionResponse:
    base_response: Optional[shared.BaseResponse] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
