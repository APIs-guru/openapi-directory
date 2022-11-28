from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class MgetInfoPathParams:
    info_array: List[str] = field(metadata={'path_param': { 'field_name': 'infoArray', 'style': 'simple', 'explode': False }})
    

@dataclass
class MgetInfoRequest:
    path_params: MgetInfoPathParams = field()
    

@dataclass
class MgetInfoResponse:
    content_type: str = field()
    status_code: int = field()
    mget_info_200_application_json_objects: Optional[List[dict[str, Any]]] = field(default=None)
    
