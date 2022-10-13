from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import confusionmatrix


@dataclass_json
@dataclass
class TextSentimentEvaluationMetrics:
    annotation_spec_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecId' }})
    confusion_matrix: Optional[confusionmatrix.ConfusionMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confusionMatrix' }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f1Score' }})
    linear_kappa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linearKappa' }})
    mean_absolute_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAbsoluteError' }})
    mean_squared_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanSquaredError' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    quadratic_kappa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quadraticKappa' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    
