from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AggregateClassificationMetrics:
    accuracy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accuracy' }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'f1Score' }})
    log_loss: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLoss' }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recall' }})
    roc_auc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rocAuc' }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    
