from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoalMetricRequestUnitEnum(str, Enum):
    NONE = "none"
    CURRENCY = "currency"
    PERCENTAGE = "percentage"


@dataclass_json
@dataclass
class GoalMetricRequestInput:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    current_display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_display_value') }})
    current_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_number_value') }})
    initial_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_number_value') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    target_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_number_value') }})
    unit: Optional[GoalMetricRequestUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
