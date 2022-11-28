from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BinaryClassificationMetrics:
    r"""BinaryClassificationMetrics
    Evaluation metrics for binary classification/classifier models.
    """
    
    aggregate_classification_metrics: Optional[AggregateClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateClassificationMetrics') }})
    binary_confusion_matrix_list: Optional[List[BinaryConfusionMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryConfusionMatrixList') }})
    negative_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeLabel') }})
    positive_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveLabel') }})
    
