from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreatePipelineRequest:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    pipeline_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDefinition' }})
    pipeline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDescription' }})
    pipeline_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineDisplayName' }})
    pipeline_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
