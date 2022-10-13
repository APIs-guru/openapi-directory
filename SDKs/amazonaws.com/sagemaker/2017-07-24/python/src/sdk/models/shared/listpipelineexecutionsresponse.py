from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelineexecutionsummary


@dataclass_json
@dataclass
class ListPipelineExecutionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    pipeline_execution_summaries: Optional[List[pipelineexecutionsummary.PipelineExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionSummaries' }})
    
