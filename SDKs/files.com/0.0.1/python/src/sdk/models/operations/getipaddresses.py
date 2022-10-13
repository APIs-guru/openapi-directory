from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetIPAddressesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIPAddressesRequest:
    query_params: GetIPAddressesQueryParams = field(default=None)
    

@dataclass
class GetIPAddressesResponse:
    content_type: str = field(default=None)
    ip_address_entities: Optional[List[shared.IPAddressEntity]] = field(default=None)
    status_code: int = field(default=None)
    
