from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCIDShowJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCIDShowJSONRequest:
    path_params: GetCIDShowJSONPathParams = field(default=None)
    

@dataclass
class GetCIDShowJSONResponse:
    content_type: str = field(default=None)
    get_c_id_show_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
