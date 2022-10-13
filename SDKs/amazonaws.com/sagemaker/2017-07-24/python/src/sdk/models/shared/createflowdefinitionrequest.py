from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import humanloopactivationconfig
from . import humanloopconfig
from . import humanlooprequestsource
from . import flowdefinitionoutputconfig
from . import tag


@dataclass_json
@dataclass
class CreateFlowDefinitionRequest:
    flow_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowDefinitionName' }})
    human_loop_activation_config: Optional[humanloopactivationconfig.HumanLoopActivationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationConfig' }})
    human_loop_config: humanloopconfig.HumanLoopConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopConfig' }})
    human_loop_request_source: Optional[humanlooprequestsource.HumanLoopRequestSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopRequestSource' }})
    output_config: flowdefinitionoutputconfig.FlowDefinitionOutputConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputConfig' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
