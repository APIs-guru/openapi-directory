from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class LikeSpaceItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LikeSpaceItemRequest:
    path_params: LikeSpaceItemPathParams = field()
    security: LikeSpaceItemSecurity = field()
    

@dataclass
class LikeSpaceItemResponse:
    content_type: str = field()
    status_code: int = field()
    
