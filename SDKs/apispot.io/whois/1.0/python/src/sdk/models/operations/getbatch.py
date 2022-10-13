from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBatchPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBatchRequest:
    path_params: GetBatchPathParams = field(default=None)
    

@dataclass
class GetBatchResponse:
    batch: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
