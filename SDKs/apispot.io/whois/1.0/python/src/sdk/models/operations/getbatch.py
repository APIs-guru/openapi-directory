from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBatchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchRequest:
    path_params: GetBatchPathParams = field()
    

@dataclass
class GetBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch: Optional[Any] = field(default=None)
    
