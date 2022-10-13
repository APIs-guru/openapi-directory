from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class EePlanListItemIntervalEnum(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"
    NONE = "none"


@dataclass_json
@dataclass
class EePlanListItem:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    cta_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ctaText' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    header_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerText' }})
    hero_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroText' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interval: Optional[EePlanListItemIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    interval_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalCount' }})
    long_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longText' }})
    nickname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    product: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    trial_period_days: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriodDays' }})
    
