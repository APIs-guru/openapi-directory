from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFlowDefinitionRequest:
    flow_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FlowDefinitionName') }})
    human_loop_config: HumanLoopConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopConfig') }})
    output_config: FlowDefinitionOutputConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    human_loop_activation_config: Optional[HumanLoopActivationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationConfig') }})
    human_loop_request_source: Optional[HumanLoopRequestSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopRequestSource') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
