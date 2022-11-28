from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnFlagItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnFlagItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnFlagItemRequest:
    path_params: UnFlagItemPathParams = field()
    security: UnFlagItemSecurity = field()
    

@dataclass
class UnFlagItemResponse:
    content_type: str = field()
    status_code: int = field()
    
