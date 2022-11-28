from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StorePersistsPathParams:
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorePersistsRequest:
    path_params: StorePersistsPathParams = field()
    

@dataclass
class StorePersistsResponse:
    content_type: str = field()
    status_code: int = field()
    store_persists_200_application_json_string: Optional[str] = field(default=None)
    
