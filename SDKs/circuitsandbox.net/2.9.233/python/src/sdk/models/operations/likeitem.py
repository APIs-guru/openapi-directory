from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class LikeItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LikeItemRequest:
    path_params: LikeItemPathParams = field()
    security: LikeItemSecurity = field()
    

@dataclass
class LikeItemResponse:
    content_type: str = field()
    status_code: int = field()
    
