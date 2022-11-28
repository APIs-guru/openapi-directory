from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FirewallPolicyResponse:
    r"""FirewallPolicyResponse
    The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
    """
    
    firewall_policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    firewall_policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyId') }})
    firewall_policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    firewall_policy_status: Optional[ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyStatus') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
