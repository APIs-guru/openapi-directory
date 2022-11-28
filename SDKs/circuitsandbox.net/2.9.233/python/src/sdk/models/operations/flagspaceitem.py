from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class FlagSpaceItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FlagSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FlagSpaceItemRequest:
    path_params: FlagSpaceItemPathParams = field()
    security: FlagSpaceItemSecurity = field()
    

@dataclass
class FlagSpaceItemResponse:
    content_type: str = field()
    status_code: int = field()
    
