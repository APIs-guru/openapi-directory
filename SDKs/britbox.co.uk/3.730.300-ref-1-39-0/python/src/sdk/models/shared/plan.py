from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlanBillingPeriodTypeEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"

class PlanRevenueTypeEnum(str, Enum):
    TVOD = "TVOD"
    SVOD = "SVOD"

class PlanTypeEnum(str, Enum):
    FREE = "Free"
    SUBSCRIPTION = "Subscription"


@dataclass_json
@dataclass
class Plan:
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    benefits: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefits') }})
    billing_period_frequency: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodFrequency') }})
    billing_period_type: PlanBillingPeriodTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingPeriodType') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    has_trial_period: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasTrialPeriod') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    is_featured: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFeatured') }})
    is_private: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrivate') }})
    revenue_type: PlanRevenueTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenueType') }})
    subscription_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionCode') }})
    tagline: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagline') }})
    terms_and_conditions: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    trial_period_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriodDays') }})
    type: PlanTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
