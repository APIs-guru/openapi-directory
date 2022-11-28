from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TargetingRuleScope:
    r"""TargetingRuleScope
    Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
    """
    
    specific_subscription_in_app: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specificSubscriptionInApp') }})
    
