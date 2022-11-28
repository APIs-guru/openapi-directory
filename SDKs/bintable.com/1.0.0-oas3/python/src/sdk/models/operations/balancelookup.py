from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BalanceLookupQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class BalanceLookupRequest:
    query_params: BalanceLookupQueryParams = field()
    

@dataclass
class BalanceLookupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
