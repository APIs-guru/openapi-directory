from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IterationResult:
    duration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMs') }})
    eval_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evalLoss') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    learn_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('learnRate') }})
    training_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingLoss') }})
    
