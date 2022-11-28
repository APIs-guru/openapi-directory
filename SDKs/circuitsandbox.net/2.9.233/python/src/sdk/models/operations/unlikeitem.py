from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnlikeItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlikeItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnlikeItemRequest:
    path_params: UnlikeItemPathParams = field()
    security: UnlikeItemSecurity = field()
    

@dataclass
class UnlikeItemResponse:
    content_type: str = field()
    status_code: int = field()
    
