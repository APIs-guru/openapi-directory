from dataclasses import dataclass, field



@dataclass
class UnlikeSpaceItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnlikeSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnlikeSpaceItemRequest:
    path_params: UnlikeSpaceItemPathParams = field(default=None)
    security: UnlikeSpaceItemSecurity = field(default=None)
    

@dataclass
class UnlikeSpaceItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
