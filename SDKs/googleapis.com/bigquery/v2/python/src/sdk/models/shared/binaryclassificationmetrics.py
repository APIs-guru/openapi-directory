from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregateclassificationmetrics
from . import binaryconfusionmatrix


@dataclass_json
@dataclass
class BinaryClassificationMetrics:
    aggregate_classification_metrics: Optional[aggregateclassificationmetrics.AggregateClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateClassificationMetrics' }})
    binary_confusion_matrix_list: Optional[List[binaryconfusionmatrix.BinaryConfusionMatrix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryConfusionMatrixList' }})
    negative_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeLabel' }})
    positive_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positiveLabel' }})
    
