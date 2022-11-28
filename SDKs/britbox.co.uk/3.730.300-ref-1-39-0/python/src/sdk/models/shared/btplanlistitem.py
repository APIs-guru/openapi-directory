from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BtPlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class BtPlanListItem:
    cta_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ctaText') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerText') }})
    hero_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroText') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    long_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longText') }})
    nickname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    product: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    trial_period_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriodDays') }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ees07_plan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ees07PlanDescription') }})
    ees07_plan_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ees07PlanTitle') }})
    ees07_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ees07Title') }})
    interval: Optional[BtPlanListItemIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    interval_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalCount') }})
    no_thanks_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noThanksText') }})
    switching_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchingText') }})
    terms_and_conditions_itunes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditionsItunes') }})
    terms_and_conditions_stripe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditionsStripe') }})
    
