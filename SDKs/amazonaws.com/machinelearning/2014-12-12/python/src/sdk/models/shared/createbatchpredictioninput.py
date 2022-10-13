from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateBatchPredictionInput:
    batch_prediction_data_source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchPredictionDataSourceId' }})
    batch_prediction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchPredictionId' }})
    batch_prediction_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchPredictionName' }})
    ml_model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MLModelId' }})
    output_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputUri' }})
    
