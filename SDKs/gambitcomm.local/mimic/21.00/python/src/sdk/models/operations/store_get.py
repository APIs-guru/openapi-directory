from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StoreGetPathParams:
    var: str = field(metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoreGetRequest:
    path_params: StoreGetPathParams = field()
    

@dataclass
class StoreGetResponse:
    content_type: str = field()
    status_code: int = field()
    store_get_200_application_json_string: Optional[str] = field(default=None)
    
