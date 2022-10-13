from dataclasses import dataclass, field



@dataclass
class UnFlagItemPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnFlagItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnFlagItemRequest:
    path_params: UnFlagItemPathParams = field(default=None)
    security: UnFlagItemSecurity = field(default=None)
    

@dataclass
class UnFlagItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
