from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RolloutRuleModel:
    comparison_attribute: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonAttribute') }})
    comparison_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonValue') }})
    comparator: Optional[RolloutRuleComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
