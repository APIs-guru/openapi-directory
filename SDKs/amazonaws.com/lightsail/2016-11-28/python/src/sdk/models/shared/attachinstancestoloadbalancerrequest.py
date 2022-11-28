from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttachInstancesToLoadBalancerRequest:
    instance_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    load_balancer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancerName') }})
    
