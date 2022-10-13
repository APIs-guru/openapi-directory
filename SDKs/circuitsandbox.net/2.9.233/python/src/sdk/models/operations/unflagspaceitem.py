from dataclasses import dataclass, field



@dataclass
class UnflagSpaceItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnflagSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnflagSpaceItemRequest:
    path_params: UnflagSpaceItemPathParams = field(default=None)
    security: UnflagSpaceItemSecurity = field(default=None)
    

@dataclass
class UnflagSpaceItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
