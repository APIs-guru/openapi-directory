from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfusionMatrix:
    r"""ConfusionMatrix
    Confusion matrix of the model running the classification.
    """
    
    annotation_spec_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecId') }})
    display_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    row: Optional[List[ClassificationEvaluationMetricsConfusionMatrixRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
