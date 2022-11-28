from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonthlyTransfer:
    r"""MonthlyTransfer
    Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).
    """
    
    gb_per_month_allocated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gbPerMonthAllocated') }})
    
