from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreExistsPathParams:
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreExistsRequest:
    path_params: StoreExistsPathParams = field()
    

@dataclass
class StoreExistsResponse:
    content_type: str = field()
    status_code: int = field()
    store_exists_200_application_json_string: Optional[str] = field(default=None)
    
