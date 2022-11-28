from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutoRenewingBasePlanTypeProrationModeEnum(str, Enum):
    SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED = "SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED"
    SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE = "SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE"
    SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY = "SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY"

class AutoRenewingBasePlanTypeResubscribeStateEnum(str, Enum):
    RESUBSCRIBE_STATE_UNSPECIFIED = "RESUBSCRIBE_STATE_UNSPECIFIED"
    RESUBSCRIBE_STATE_ACTIVE = "RESUBSCRIBE_STATE_ACTIVE"
    RESUBSCRIBE_STATE_INACTIVE = "RESUBSCRIBE_STATE_INACTIVE"


@dataclass_json
@dataclass
class AutoRenewingBasePlanType:
    r"""AutoRenewingBasePlanType
    Represents a base plan that automatically renews at the end of its subscription period.
    """
    
    billing_period_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodDuration') }})
    grace_period_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gracePeriodDuration') }})
    legacy_compatible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyCompatible') }})
    legacy_compatible_subscription_offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyCompatibleSubscriptionOfferId') }})
    proration_mode: Optional[AutoRenewingBasePlanTypeProrationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prorationMode') }})
    resubscribe_state: Optional[AutoRenewingBasePlanTypeResubscribeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resubscribeState') }})
    
