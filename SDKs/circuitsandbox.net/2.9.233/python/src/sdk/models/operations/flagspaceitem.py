from dataclasses import dataclass, field



@dataclass
class FlagSpaceItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FlagSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FlagSpaceItemRequest:
    path_params: FlagSpaceItemPathParams = field(default=None)
    security: FlagSpaceItemSecurity = field(default=None)
    

@dataclass
class FlagSpaceItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
