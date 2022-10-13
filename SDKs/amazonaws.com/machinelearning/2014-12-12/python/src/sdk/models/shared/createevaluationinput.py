from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateEvaluationInput:
    evaluation_data_source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationDataSourceId' }})
    evaluation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationId' }})
    evaluation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationName' }})
    ml_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    
