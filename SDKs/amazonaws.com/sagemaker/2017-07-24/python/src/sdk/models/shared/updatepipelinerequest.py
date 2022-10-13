from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdatePipelineRequest:
    pipeline_definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDefinition' }})
    pipeline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDescription' }})
    pipeline_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDisplayName' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineName' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
