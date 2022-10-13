from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelineexecutionstep


@dataclass_json
@dataclass
class ListPipelineExecutionStepsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    pipeline_execution_steps: Optional[List[pipelineexecutionstep.PipelineExecutionStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionSteps' }})
    
