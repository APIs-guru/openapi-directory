from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TranslationEvaluationMetrics:
    r"""TranslationEvaluationMetrics
    Evaluation metrics for the dataset.
    """
    
    base_bleu_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseBleuScore') }})
    bleu_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bleuScore') }})
    
