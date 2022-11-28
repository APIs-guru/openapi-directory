from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCIDShowJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCIDShowJSONRequest:
    path_params: GetCIDShowJSONPathParams = field()
    

@dataclass
class GetCIDShowJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_c_id_show_json_200_application_json_any: Optional[Any] = field(default=None)
    
