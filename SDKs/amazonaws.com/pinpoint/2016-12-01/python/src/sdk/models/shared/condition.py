from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import simplecondition
from . import operator_enum


@dataclass_json
@dataclass
class Condition:
    conditions: Optional[List[simplecondition.SimpleCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Conditions' }})
    operator: Optional[operator_enum.OperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operator' }})
    
