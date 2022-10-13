from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StorePersistsPathParams:
    var: str = field(default=None, metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorePersistsRequest:
    path_params: StorePersistsPathParams = field(default=None)
    

@dataclass
class StorePersistsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    store_persists_200_application_json_string: Optional[str] = field(default=None)
    
