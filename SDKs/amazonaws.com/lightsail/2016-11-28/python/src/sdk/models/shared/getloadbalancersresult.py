from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loadbalancer


@dataclass_json
@dataclass
class GetLoadBalancersResult:
    load_balancers: Optional[List[loadbalancer.LoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
