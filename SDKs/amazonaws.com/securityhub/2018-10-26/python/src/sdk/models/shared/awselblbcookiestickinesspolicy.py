from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElbLbCookieStickinessPolicy:
    r"""AwsElbLbCookieStickinessPolicy
    Contains information about a stickiness policy that was created using <code>CreateLBCookieStickinessPolicy</code>.
    """
    
    cookie_expiration_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CookieExpirationPeriod') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    
