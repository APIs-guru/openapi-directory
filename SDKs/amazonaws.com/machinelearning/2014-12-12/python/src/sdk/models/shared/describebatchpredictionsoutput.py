from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchprediction


@dataclass_json
@dataclass
class DescribeBatchPredictionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    results: Optional[List[batchprediction.BatchPrediction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
