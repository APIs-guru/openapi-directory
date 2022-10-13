from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inferenceexecutionsummary


@dataclass_json
@dataclass
class ListInferenceExecutionsResponse:
    inference_execution_summaries: Optional[List[inferenceexecutionsummary.InferenceExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceExecutionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
