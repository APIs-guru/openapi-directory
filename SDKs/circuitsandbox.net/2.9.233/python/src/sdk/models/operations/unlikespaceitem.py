from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnlikeSpaceItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlikeSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnlikeSpaceItemRequest:
    path_params: UnlikeSpaceItemPathParams = field()
    security: UnlikeSpaceItemSecurity = field()
    

@dataclass
class UnlikeSpaceItemResponse:
    content_type: str = field()
    status_code: int = field()
    
