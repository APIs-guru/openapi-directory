from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElbLoadBalancerHealthCheck:
    r"""AwsElbLoadBalancerHealthCheck
    Contains information about the health checks that are conducted on the load balancer.
    """
    
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthyThreshold') }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeout') }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnhealthyThreshold') }})
    
