from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachElasticLoadBalancerRequest:
    elastic_load_balancer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElasticLoadBalancerName') }})
    layer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    
