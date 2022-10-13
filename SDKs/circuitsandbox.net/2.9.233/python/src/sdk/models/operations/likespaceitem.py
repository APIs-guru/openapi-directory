from dataclasses import dataclass, field



@dataclass
class LikeSpaceItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class LikeSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class LikeSpaceItemRequest:
    path_params: LikeSpaceItemPathParams = field(default=None)
    security: LikeSpaceItemSecurity = field(default=None)
    

@dataclass
class LikeSpaceItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
