from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassificationEvaluationMetrics:
    r"""ClassificationEvaluationMetrics
    Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of \"segment_classification\" type.
    """
    
    annotation_spec_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecId') }})
    au_prc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auPrc') }})
    au_roc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auRoc') }})
    base_au_prc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseAuPrc') }})
    confidence_metrics_entry: Optional[List[ClassificationEvaluationMetricsConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceMetricsEntry') }})
    confusion_matrix: Optional[ConfusionMatrix] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confusionMatrix') }})
    log_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLoss') }})
    
