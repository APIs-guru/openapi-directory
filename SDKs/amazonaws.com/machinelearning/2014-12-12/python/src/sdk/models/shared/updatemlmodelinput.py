from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateMlModelInput:
    ml_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    ml_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelName' }})
    score_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScoreThreshold' }})
    
