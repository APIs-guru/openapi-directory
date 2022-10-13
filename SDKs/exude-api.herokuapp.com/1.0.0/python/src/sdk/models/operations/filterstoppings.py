from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class FilterStoppingsPathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilterStoppingsRequest:
    path_params: FilterStoppingsPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FilterStoppingsResponse:
    content_type: str = field(default=None)
    exude_response_bean: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
