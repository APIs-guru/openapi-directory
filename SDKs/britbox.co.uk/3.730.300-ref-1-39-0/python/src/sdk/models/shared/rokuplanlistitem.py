from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RokuPlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class RokuPlanListItem:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    interval: RokuPlanListItemIntervalEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    interval_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalCount') }})
    nickname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    product: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    product_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    saving_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingLabel') }})
    trial_period_days: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialPeriodDays') }})
    
