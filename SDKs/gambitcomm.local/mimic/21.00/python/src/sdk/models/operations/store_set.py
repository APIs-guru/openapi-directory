from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreSetPathParams:
    persist: int = field(metadata={'path_param': { 'field_name': 'persist', 'style': 'simple', 'explode': False }})
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreSetRequest:
    path_params: StoreSetPathParams = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoreSetResponse:
    content_type: str = field()
    status_code: int = field()
    store_set_200_application_json_string: Optional[str] = field(default=None)
    
