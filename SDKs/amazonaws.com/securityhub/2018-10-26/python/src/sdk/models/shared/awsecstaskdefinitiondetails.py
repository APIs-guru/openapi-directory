from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionDetails:
    r"""AwsEcsTaskDefinitionDetails
    details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.
    """
    
    container_definitions: Optional[List[AwsEcsTaskDefinitionContainerDefinitionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerDefinitions') }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cpu') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Family') }})
    inference_accelerators: Optional[List[AwsEcsTaskDefinitionInferenceAcceleratorsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceAccelerators') }})
    ipc_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpcMode') }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Memory') }})
    network_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkMode') }})
    pid_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PidMode') }})
    placement_constraints: Optional[List[AwsEcsTaskDefinitionPlacementConstraintsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementConstraints') }})
    proxy_configuration: Optional[AwsEcsTaskDefinitionProxyConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProxyConfiguration') }})
    requires_compatibilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiresCompatibilities') }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskRoleArn') }})
    volumes: Optional[List[AwsEcsTaskDefinitionVolumesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Volumes') }})
    
