from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ItvPlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class ItvPlanListItem:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interval: ItvPlanListItemIntervalEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    interval_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalCount' }})
    nickname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    product: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    saving_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingLabel' }})
    switching_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchingText' }})
    trial_period_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriodDays' }})
    
