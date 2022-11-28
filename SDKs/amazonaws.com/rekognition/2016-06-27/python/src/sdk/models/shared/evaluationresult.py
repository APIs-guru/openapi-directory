from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluationResult:
    r"""EvaluationResult
    The evaluation results for the training of a model.
    """
    
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('F1Score') }})
    summary: Optional[Summary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
