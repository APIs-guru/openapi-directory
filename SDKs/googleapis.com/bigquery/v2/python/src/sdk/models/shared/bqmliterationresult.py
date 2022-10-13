from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BqmlIterationResult:
    duration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMs' }})
    eval_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evalLoss' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnRate' }})
    training_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingLoss' }})
    
