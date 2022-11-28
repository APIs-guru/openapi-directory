from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBinIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBinIDRequest:
    path_params: GetBinIDPathParams = field()
    

@dataclass
class GetBinIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    get_bin_id_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
