from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

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
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    benefits: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefits' }})
    billing_period_frequency: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriodFrequency' }})
    billing_period_type: PlanBillingPeriodTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingPeriodType' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    has_trial_period: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasTrialPeriod' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    is_featured: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFeatured' }})
    is_private: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrivate' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    revenue_type: PlanRevenueTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenueType' }})
    subscription_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionCode' }})
    tagline: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagline' }})
    terms_and_conditions: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    trial_period_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriodDays' }})
    type: PlanTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
