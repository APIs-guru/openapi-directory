from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElbLoadBalancerConnectionSettings:
    r"""AwsElbLoadBalancerConnectionSettings
    Contains connection settings for the load balancer.
    """
    
    idle_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleTimeout') }})
    
