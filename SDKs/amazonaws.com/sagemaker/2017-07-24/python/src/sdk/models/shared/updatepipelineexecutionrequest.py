from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePipelineExecutionRequest:
    pipeline_execution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionArn' }})
    pipeline_execution_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDescription' }})
    pipeline_execution_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineExecutionDisplayName' }})
    
