from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awselbloadbalancerlistener


@dataclass_json
@dataclass
class AwsElbLoadBalancerListenerDescription:
    listener: Optional[awselbloadbalancerlistener.AwsElbLoadBalancerListener] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Listener' }})
    policy_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyNames' }})
    
