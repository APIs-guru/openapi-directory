from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TranslationEvaluationMetrics:
    base_bleu_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseBleuScore' }})
    bleu_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bleuScore' }})
    
