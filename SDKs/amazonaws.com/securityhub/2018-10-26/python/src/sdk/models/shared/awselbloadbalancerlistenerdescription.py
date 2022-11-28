from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElbLoadBalancerListenerDescription:
    r"""AwsElbLoadBalancerListenerDescription
    Lists the policies that are enabled for a load balancer listener.
    """
    
    listener: Optional[AwsElbLoadBalancerListener] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Listener') }})
    policy_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyNames') }})
    
