from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import elasticloadbalancer


@dataclass_json
@dataclass
class DescribeElasticLoadBalancersResult:
    elastic_load_balancers: Optional[List[elasticloadbalancer.ElasticLoadBalancer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticLoadBalancers' }})
    
