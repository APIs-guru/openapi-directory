from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simplecondition


@dataclass_json
@dataclass
class MultiConditionalBranch:
    condition: Optional[simplecondition.SimpleCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextActivity' }})
    
