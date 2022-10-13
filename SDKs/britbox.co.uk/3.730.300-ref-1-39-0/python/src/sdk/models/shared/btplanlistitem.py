from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class BtPlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class BtPlanListItem:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    cta_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ctaText' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ees07_plan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ees07PlanDescription' }})
    ees07_plan_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ees07PlanTitle' }})
    ees07_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ees07Title' }})
    header_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerText' }})
    hero_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroText' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interval: Optional[BtPlanListItemIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    interval_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalCount' }})
    long_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longText' }})
    nickname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    no_thanks_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noThanksText' }})
    product: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    switching_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchingText' }})
    terms_and_conditions_itunes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditionsItunes' }})
    terms_and_conditions_stripe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditionsStripe' }})
    trial_period_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriodDays' }})
    
