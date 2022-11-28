from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BinaryConfusionMatrix:
    r"""BinaryConfusionMatrix
    Confusion matrix for binary classification models.
    """
    
    accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accuracy') }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('f1Score') }})
    false_negatives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('falseNegatives') }})
    false_positives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('falsePositives') }})
    positive_class_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveClassThreshold') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    true_negatives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trueNegatives') }})
    true_positives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truePositives') }})
    
