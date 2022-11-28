from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteItemPromotionPathParams:
    promotion_id: str = field(metadata={'path_param': { 'field_name': 'promotion_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemPromotionSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteItemPromotionRequest:
    path_params: DeleteItemPromotionPathParams = field()
    security: DeleteItemPromotionSecurity = field()
    

@dataclass
class DeleteItemPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    
