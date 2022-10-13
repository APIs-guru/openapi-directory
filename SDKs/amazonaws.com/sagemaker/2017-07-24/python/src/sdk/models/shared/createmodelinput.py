from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerdefinition
from . import inferenceexecutionconfig
from . import containerdefinition
from . import tag
from . import vpcconfig


@dataclass_json
@dataclass
class CreateModelInput:
    containers: Optional[List[containerdefinition.ContainerDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Containers' }})
    enable_network_isolation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableNetworkIsolation' }})
    execution_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    inference_execution_config: Optional[inferenceexecutionconfig.InferenceExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceExecutionConfig' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    primary_container: Optional[containerdefinition.ContainerDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryContainer' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcConfig' }})
    
