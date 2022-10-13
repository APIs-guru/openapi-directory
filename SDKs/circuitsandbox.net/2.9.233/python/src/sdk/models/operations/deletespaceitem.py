from dataclasses import dataclass, field



@dataclass
class DeleteSpaceItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSpaceItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSpaceItemRequest:
    path_params: DeleteSpaceItemPathParams = field(default=None)
    security: DeleteSpaceItemSecurity = field(default=None)
    

@dataclass
class DeleteSpaceItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
