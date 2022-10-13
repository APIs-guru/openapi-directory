from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BinaryConfusionMatrix:
    accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accuracy' }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f1Score' }})
    false_negatives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'falseNegatives' }})
    false_positives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'falsePositives' }})
    positive_class_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positiveClassThreshold' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    true_negatives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trueNegatives' }})
    true_positives: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truePositives' }})
    
