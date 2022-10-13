from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchinferencejobsummary


@dataclass_json
@dataclass
class ListBatchInferenceJobsResponse:
    batch_inference_jobs: Optional[List[batchinferencejobsummary.BatchInferenceJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchInferenceJobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
