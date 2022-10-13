from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operator_enum


@dataclass_json
@dataclass
class Filter:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operator: Optional[operator_enum.OperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
