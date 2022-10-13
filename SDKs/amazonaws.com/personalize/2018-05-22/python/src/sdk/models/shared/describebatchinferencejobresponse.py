from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchinferencejob


@dataclass_json
@dataclass
class DescribeBatchInferenceJobResponse:
    batch_inference_job: Optional[batchinferencejob.BatchInferenceJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchInferenceJob' }})
    
