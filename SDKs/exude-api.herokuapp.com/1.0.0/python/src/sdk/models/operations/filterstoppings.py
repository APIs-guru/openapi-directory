from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class FilterStoppingsPathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilterStoppingsRequest:
    path_params: FilterStoppingsPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FilterStoppingsResponse:
    content_type: str = field()
    status_code: int = field()
    exude_response_bean: Optional[Any] = field(default=None)
    
