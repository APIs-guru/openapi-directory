from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetKeyQueryParams:
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetKeyRequest:
    query_params: GetKeyQueryParams = field(default=None)
    

@dataclass
class GetKeyResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
