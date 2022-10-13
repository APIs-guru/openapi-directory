from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Prediction:
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    predicted_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictedLabel' }})
    predicted_scores: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictedScores' }})
    predicted_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictedValue' }})
    
