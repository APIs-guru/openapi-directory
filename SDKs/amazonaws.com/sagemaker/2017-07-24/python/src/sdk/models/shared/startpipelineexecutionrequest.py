from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameter


@dataclass_json
@dataclass
class StartPipelineExecutionRequest:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    pipeline_execution_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDescription' }})
    pipeline_execution_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDisplayName' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineName' }})
    pipeline_parameters: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineParameters' }})
    
