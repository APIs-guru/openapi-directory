from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsAutoScalingAutoScalingGroupDetails:
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    health_check_grace_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckGracePeriod' }})
    health_check_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheckType' }})
    launch_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchConfigurationName' }})
    load_balancer_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBalancerNames' }})
    
