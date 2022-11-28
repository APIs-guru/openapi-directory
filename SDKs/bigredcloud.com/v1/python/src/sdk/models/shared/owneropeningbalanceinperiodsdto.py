from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OwnerOpeningBalanceInPeriodsDto:
    current_month: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentMonth') }})
    one_month_old: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneMonthOld') }})
    three_months_old: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threeMonthsOld') }})
    two_months_old: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twoMonthsOld') }})
    
