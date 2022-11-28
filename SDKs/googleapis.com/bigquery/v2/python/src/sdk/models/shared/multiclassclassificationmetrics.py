from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MultiClassClassificationMetrics:
    r"""MultiClassClassificationMetrics
    Evaluation metrics for multi-class classification/classifier models.
    """
    
    aggregate_classification_metrics: Optional[AggregateClassificationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateClassificationMetrics') }})
    confusion_matrix_list: Optional[List[ConfusionMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confusionMatrixList') }})
    
