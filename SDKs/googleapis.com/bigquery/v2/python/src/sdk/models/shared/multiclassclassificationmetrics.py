from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregateclassificationmetrics
from . import confusionmatrix


@dataclass_json
@dataclass
class MultiClassClassificationMetrics:
    aggregate_classification_metrics: Optional[aggregateclassificationmetrics.AggregateClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateClassificationMetrics' }})
    confusion_matrix_list: Optional[List[confusionmatrix.ConfusionMatrix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confusionMatrixList' }})
    
