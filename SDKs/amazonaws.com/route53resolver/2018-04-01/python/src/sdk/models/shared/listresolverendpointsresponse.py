from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resolverendpoint


@dataclass_json
@dataclass
class ListResolverEndpointsResponse:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resolver_endpoints: Optional[List[resolverendpoint.ResolverEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolverEndpoints' }})
    
