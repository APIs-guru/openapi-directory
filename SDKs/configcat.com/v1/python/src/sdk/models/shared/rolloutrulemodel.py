from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import rolloutrulecomparator_enum


@dataclass_json
@dataclass
class RolloutRuleModel:
    comparator: Optional[rolloutrulecomparator_enum.RolloutRuleComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    comparison_attribute: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonAttribute' }})
    comparison_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparisonValue' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
