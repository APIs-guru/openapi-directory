from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EePlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class EePlanListItem:
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
    interval: Optional[EePlanListItemIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    interval_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalCount') }})
    
