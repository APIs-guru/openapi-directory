from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NumericValue:
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'int64Value' }})
    
