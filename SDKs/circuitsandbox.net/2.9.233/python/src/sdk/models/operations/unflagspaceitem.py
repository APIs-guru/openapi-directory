from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnflagSpaceItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnflagSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnflagSpaceItemRequest:
    path_params: UnflagSpaceItemPathParams = field()
    security: UnflagSpaceItemSecurity = field()
    

@dataclass
class UnflagSpaceItemResponse:
    content_type: str = field()
    status_code: int = field()
    
