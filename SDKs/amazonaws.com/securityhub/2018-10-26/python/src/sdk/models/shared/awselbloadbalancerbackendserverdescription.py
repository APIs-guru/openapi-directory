from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsElbLoadBalancerBackendServerDescription:
    instance_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstancePort' }})
    policy_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyNames' }})
    
