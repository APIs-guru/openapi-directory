from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PredictInput:
    ml_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    predict_endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictEndpoint' }})
    record: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Record' }})
    
