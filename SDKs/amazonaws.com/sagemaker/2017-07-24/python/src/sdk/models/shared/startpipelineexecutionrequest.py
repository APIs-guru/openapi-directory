from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartPipelineExecutionRequest:
    client_request_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineName') }})
    pipeline_execution_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineExecutionDescription') }})
    pipeline_execution_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineExecutionDisplayName') }})
    pipeline_parameters: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineParameters') }})
    
