from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import numericvalue
from . import numericvalue


@dataclass_json
@dataclass
class BetweenFilter:
    from_value: Optional[numericvalue.NumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromValue' }})
    to_value: Optional[numericvalue.NumericValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toValue' }})
    
