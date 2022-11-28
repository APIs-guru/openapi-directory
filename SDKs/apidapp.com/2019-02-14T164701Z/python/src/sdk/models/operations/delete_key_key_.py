from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteKeyKeyPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKeyKeyRequest:
    path_params: DeleteKeyKeyPathParams = field()
    

@dataclass
class DeleteKeyKeyResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
