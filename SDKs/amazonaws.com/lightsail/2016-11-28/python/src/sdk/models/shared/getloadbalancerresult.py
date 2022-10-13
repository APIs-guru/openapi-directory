from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loadbalancer


@dataclass_json
@dataclass
class GetLoadBalancerResult:
    load_balancer: Optional[loadbalancer.LoadBalancer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancer' }})
    
