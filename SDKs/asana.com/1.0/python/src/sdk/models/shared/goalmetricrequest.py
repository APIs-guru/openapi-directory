from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoalMetricRequestResourceSubtypeEnum(str, Enum):
    NUMBER = "number"

class GoalMetricRequestUnitEnum(str, Enum):
    NONE = "none"
    CURRENCY = "currency"
    PERCENTAGE = "percentage"


@dataclass_json
@dataclass
class GoalMetricRequest:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    current_display_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_display_value' }})
    current_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_number_value' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    initial_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initial_number_value' }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    resource_subtype: Optional[GoalMetricRequestResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    target_number_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_number_value' }})
    unit: Optional[GoalMetricRequestUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
