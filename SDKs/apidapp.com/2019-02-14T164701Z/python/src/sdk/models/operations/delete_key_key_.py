from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteKeyKeyPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKeyKeyRequest:
    path_params: DeleteKeyKeyPathParams = field(default=None)
    

@dataclass
class DeleteKeyKeyResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
