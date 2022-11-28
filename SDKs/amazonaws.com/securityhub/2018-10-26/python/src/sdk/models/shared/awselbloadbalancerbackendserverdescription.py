from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElbLoadBalancerBackendServerDescription:
    r"""AwsElbLoadBalancerBackendServerDescription
    Provides information about the configuration of an EC2 instance for the load balancer.
    """
    
    instance_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancePort') }})
    policy_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyNames') }})
    
