from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cycle
from . import metric


@dataclass_json
@dataclass
class StandardsProfile:
    cycle: Optional[cycle.Cycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycle' }})
    default_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultProgram' }})
    evaluation_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationReason' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    program: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'program' }})
    standards_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardsLevel' }})
    
