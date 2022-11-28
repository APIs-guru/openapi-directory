from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePipelineRequest:
    client_request_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    pipeline_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineDefinition') }})
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    pipeline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineDescription') }})
    pipeline_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineDisplayName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
