from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import textextractionevaluationmetricsconfidencemetricsentry


@dataclass_json
@dataclass
class TextExtractionEvaluationMetrics:
    au_prc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auPrc' }})
    confidence_metrics_entries: Optional[List[textextractionevaluationmetricsconfidencemetricsentry.TextExtractionEvaluationMetricsConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceMetricsEntries' }})
    
