from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import summary


@dataclass_json
@dataclass
class EvaluationResult:
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'F1Score' }})
    summary: Optional[summary.Summary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    
