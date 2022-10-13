from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resolverendpoint


@dataclass_json
@dataclass
class DisassociateResolverEndpointIPAddressResponse:
    resolver_endpoint: Optional[resolverendpoint.ResolverEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverEndpoint' }})
    
