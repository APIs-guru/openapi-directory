from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipaddressresponse


@dataclass_json
@dataclass
class ListResolverEndpointIPAddressesResponse:
    ip_addresses: Optional[List[ipaddressresponse.IPAddressResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddresses' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
