from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import ipaddressupdate


@dataclass_json
@dataclass
class AssociateResolverEndpointIPAddressRequest:
    ip_address: ipaddressupdate.IPAddressUpdate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpAddress' }})
    resolver_endpoint_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverEndpointId' }})
    
