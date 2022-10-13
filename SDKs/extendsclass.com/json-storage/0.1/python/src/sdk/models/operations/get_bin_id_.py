from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBinIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBinIDRequest:
    path_params: GetBinIDPathParams = field(default=None)
    

@dataclass
class GetBinIDResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    get_bin_id_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
