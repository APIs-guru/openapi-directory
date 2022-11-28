from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FlagItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FlagItemRequestBody:
    item_creation_time: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'itemCreationTime' }})
    parent_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'parentId' }})
    

@dataclass
class FlagItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FlagItemRequest:
    path_params: FlagItemPathParams = field()
    security: FlagItemSecurity = field()
    request: Optional[FlagItemRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class FlagItemResponse:
    content_type: str = field()
    status_code: int = field()
    
