from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import classificationevaluationmetricsconfidencemetricsentry
from . import confusionmatrix


@dataclass_json
@dataclass
class ClassificationEvaluationMetrics:
    annotation_spec_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecId' }})
    au_prc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auPrc' }})
    au_roc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auRoc' }})
    base_au_prc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseAuPrc' }})
    confidence_metrics_entry: Optional[List[classificationevaluationmetricsconfidencemetricsentry.ClassificationEvaluationMetricsConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceMetricsEntry' }})
    confusion_matrix: Optional[confusionmatrix.ConfusionMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confusionMatrix' }})
    log_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLoss' }})
    
