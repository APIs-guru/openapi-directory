from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElbLoadBalancerSourceSecurityGroup:
    r"""AwsElbLoadBalancerSourceSecurityGroup
    Contains information about the security group for the load balancer.
    """
    
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    owner_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAlias') }})
    
