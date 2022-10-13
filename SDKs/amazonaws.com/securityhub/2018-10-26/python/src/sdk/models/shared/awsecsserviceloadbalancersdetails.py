from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsServiceLoadBalancersDetails:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerName' }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerPort' }})
    load_balancer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoadBalancerName' }})
    target_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetGroupArn' }})
    
