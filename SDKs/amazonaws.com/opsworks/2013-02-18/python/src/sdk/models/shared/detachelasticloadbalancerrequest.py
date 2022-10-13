from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DetachElasticLoadBalancerRequest:
    elastic_load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElasticLoadBalancerName' }})
    layer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerId' }})
    
