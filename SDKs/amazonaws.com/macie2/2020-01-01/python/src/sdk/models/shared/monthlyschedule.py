from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MonthlySchedule:
    r"""MonthlySchedule
    Specifies a monthly recurrence pattern for running a classification job.
    """
    
    day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfMonth') }})
    
