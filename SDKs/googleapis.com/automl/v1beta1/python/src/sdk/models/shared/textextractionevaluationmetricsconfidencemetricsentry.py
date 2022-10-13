from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TextExtractionEvaluationMetricsConfidenceMetricsEntry:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceThreshold' }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f1Score' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    
