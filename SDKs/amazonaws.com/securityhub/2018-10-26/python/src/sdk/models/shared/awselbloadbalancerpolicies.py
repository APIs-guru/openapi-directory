from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsElbLoadBalancerPolicies:
    r"""AwsElbLoadBalancerPolicies
    Contains information about the policies for a load balancer.
    """
    
    app_cookie_stickiness_policies: Optional[List[AwsElbAppCookieStickinessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppCookieStickinessPolicies') }})
    lb_cookie_stickiness_policies: Optional[List[AwsElbLbCookieStickinessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LbCookieStickinessPolicies') }})
    other_policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherPolicies') }})
    
