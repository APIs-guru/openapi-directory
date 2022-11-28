from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsAutoScalingAutoScalingGroupDetails:
    r"""AwsAutoScalingAutoScalingGroupDetails
    Provides details about an auto scaling group.
    """
    
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    health_check_grace_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckGracePeriod') }})
    health_check_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckType') }})
    launch_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchConfigurationName') }})
    load_balancer_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoadBalancerNames') }})
    
