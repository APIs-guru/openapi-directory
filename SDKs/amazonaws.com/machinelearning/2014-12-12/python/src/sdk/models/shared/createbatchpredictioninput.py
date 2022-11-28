from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateBatchPredictionInput:
    batch_prediction_data_source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionDataSourceId') }})
    batch_prediction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionId') }})
    ml_model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MLModelId') }})
    output_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputUri') }})
    batch_prediction_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchPredictionName') }})
    
