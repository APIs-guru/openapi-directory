from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchpredictinputconfig
from . import batchpredictoutputconfig


@dataclass_json
@dataclass
class BatchPredictRequest:
    input_config: Optional[batchpredictinputconfig.BatchPredictInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    output_config: Optional[batchpredictoutputconfig.BatchPredictOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    
