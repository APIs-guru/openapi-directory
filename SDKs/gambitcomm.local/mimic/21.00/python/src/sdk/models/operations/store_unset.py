from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreUnsetPathParams:
    var: str = field(default=None, metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreUnsetRequest:
    path_params: StoreUnsetPathParams = field(default=None)
    

@dataclass
class StoreUnsetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    store_unset_200_application_json_string: Optional[str] = field(default=None)
    
