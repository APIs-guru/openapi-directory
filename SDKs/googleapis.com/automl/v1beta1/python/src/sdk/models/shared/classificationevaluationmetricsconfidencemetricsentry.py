from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClassificationEvaluationMetricsConfidenceMetricsEntry:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceThreshold' }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f1Score' }})
    f1_score_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f1ScoreAt1' }})
    false_negative_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'falseNegativeCount' }})
    false_positive_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'falsePositiveCount' }})
    false_positive_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'falsePositiveRate' }})
    false_positive_rate_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'falsePositiveRateAt1' }})
    position_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionThreshold' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    precision_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precisionAt1' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    recall_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recallAt1' }})
    true_negative_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trueNegativeCount' }})
    true_positive_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truePositiveCount' }})
    
