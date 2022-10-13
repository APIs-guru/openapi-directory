from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import targetingrulescope


@dataclass_json
@dataclass
class UpgradeTargetingRule:
    billing_period_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriodDuration' }})
    once_per_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oncePerUser' }})
    scope: Optional[targetingrulescope.TargetingRuleScope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
