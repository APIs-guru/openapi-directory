from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreUnsetPathParams:
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreUnsetRequest:
    path_params: StoreUnsetPathParams = field()
    

@dataclass
class StoreUnsetResponse:
    content_type: str = field()
    status_code: int = field()
    store_unset_200_application_json_string: Optional[str] = field(default=None)
    
