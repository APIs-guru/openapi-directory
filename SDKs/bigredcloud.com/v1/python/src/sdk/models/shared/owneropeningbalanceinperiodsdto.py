from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OwnerOpeningBalanceInPeriodsDto:
    current_month: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentMonth' }})
    one_month_old: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneMonthOld' }})
    three_months_old: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threeMonthsOld' }})
    two_months_old: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'twoMonthsOld' }})
    
