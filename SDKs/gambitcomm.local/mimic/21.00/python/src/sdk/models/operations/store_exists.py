from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreExistsPathParams:
    var: str = field(default=None, metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreExistsRequest:
    path_params: StoreExistsPathParams = field(default=None)
    

@dataclass
class StoreExistsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    store_exists_200_application_json_string: Optional[str] = field(default=None)
    
