from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import condition

class BasicLevelCombiningFunctionEnum(str, Enum):
    AND = "AND"
    OR = "OR"


@dataclass_json
@dataclass
class BasicLevel:
    combining_function: Optional[BasicLevelCombiningFunctionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combiningFunction' }})
    conditions: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    
