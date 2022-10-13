from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inferenceschedulersummary


@dataclass_json
@dataclass
class ListInferenceSchedulersResponse:
    inference_scheduler_summaries: Optional[List[inferenceschedulersummary.InferenceSchedulerSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceSchedulerSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
