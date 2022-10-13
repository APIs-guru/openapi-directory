from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetIPAddressesReservedQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIPAddressesReservedRequest:
    query_params: GetIPAddressesReservedQueryParams = field(default=None)
    

@dataclass
class GetIPAddressesReservedResponse:
    content_type: str = field(default=None)
    public_ip_address_entities: Optional[List[shared.PublicIPAddressEntity]] = field(default=None)
    status_code: int = field(default=None)
    
