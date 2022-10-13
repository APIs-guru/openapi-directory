from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DefaultIntegerHyperParameterRange:
    is_tunable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isTunable' }})
    max_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
