from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuotaPeriod:
    r"""QuotaPeriod
    Information about the quota period.
    """
    
    period_unit: Optional[PeriodUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodUnit') }})
    period_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodValue') }})
    
