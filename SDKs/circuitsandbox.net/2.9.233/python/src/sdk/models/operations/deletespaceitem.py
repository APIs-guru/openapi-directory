from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSpaceItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSpaceItemRequest:
    path_params: DeleteSpaceItemPathParams = field()
    security: DeleteSpaceItemSecurity = field()
    

@dataclass
class DeleteSpaceItemResponse:
    content_type: str = field()
    status_code: int = field()
    
