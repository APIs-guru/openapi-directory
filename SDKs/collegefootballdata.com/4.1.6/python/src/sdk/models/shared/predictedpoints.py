from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PredictedPoints:
    predicted_points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictedPoints' }})
    yard_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yardLine' }})
    
