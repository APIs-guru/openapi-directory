from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FlagItemPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FlagItemRequestBody:
    item_creation_time: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'itemCreationTime' }})
    parent_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'parentId' }})
    

@dataclass
class FlagItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FlagItemRequest:
    path_params: FlagItemPathParams = field(default=None)
    request: Optional[FlagItemRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: FlagItemSecurity = field(default=None)
    

@dataclass
class FlagItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
