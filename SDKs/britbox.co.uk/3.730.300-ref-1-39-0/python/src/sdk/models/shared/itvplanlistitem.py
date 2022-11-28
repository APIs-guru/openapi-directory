from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ItvPlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class ItvPlanListItem:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    interval: ItvPlanListItemIntervalEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    interval_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalCount') }})
    nickname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    product: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    saving_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingLabel') }})
    switching_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchingText') }})
    trial_period_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriodDays') }})
    
