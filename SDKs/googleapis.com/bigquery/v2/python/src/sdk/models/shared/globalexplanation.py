from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import explanation


@dataclass_json
@dataclass
class GlobalExplanation:
    class_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classLabel' }})
    explanations: Optional[List[explanation.Explanation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanations' }})
    
