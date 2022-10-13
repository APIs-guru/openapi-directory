from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awselbappcookiestickinesspolicy
from . import awselblbcookiestickinesspolicy


@dataclass_json
@dataclass
class AwsElbLoadBalancerPolicies:
    app_cookie_stickiness_policies: Optional[List[awselbappcookiestickinesspolicy.AwsElbAppCookieStickinessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppCookieStickinessPolicies' }})
    lb_cookie_stickiness_policies: Optional[List[awselblbcookiestickinesspolicy.AwsElbLbCookieStickinessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LbCookieStickinessPolicies' }})
    other_policies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherPolicies' }})
    
