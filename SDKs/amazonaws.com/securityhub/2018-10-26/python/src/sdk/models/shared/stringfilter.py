from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import stringfiltercomparison_enum


@dataclass_json
@dataclass
class StringFilter:
    comparison: Optional[stringfiltercomparison_enum.StringFilterComparisonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comparison' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
