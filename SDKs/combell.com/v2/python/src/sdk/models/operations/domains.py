from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DomainsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsRequest:
    query_params: DomainsQueryParams = field(default=None)
    

@dataclass
class DomainsResponse:
    content_type: str = field(default=None)
    domains: Optional[List[shared.Domain]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
