from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserWatchingQueryParams:
    identity_cookie: float = field(metadata={'query_param': { 'field_name': 'identity_cookie', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserWatchingRequest:
    query_params: GetUserWatchingQueryParams = field()
    

@dataclass
class GetUserWatchingResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
