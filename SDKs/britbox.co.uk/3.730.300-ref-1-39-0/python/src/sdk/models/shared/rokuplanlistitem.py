from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

class RokuPlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class RokuPlanListItem:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    interval: RokuPlanListItemIntervalEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    interval_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalCount' }})
    nickname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    product: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    product_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    saving_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingLabel' }})
    trial_period_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriodDays' }})
    
