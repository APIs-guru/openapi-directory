from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextExtractionEvaluationMetrics:
    r"""TextExtractionEvaluationMetrics
    Model evaluation metrics for text extraction problems.
    """
    
    au_prc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auPrc') }})
    confidence_metrics_entries: Optional[List[TextExtractionEvaluationMetricsConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceMetricsEntries') }})
    
