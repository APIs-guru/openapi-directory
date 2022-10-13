from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitioncontainerdefinitionsdetails
from . import awsecstaskdefinitioninferenceacceleratorsdetails
from . import awsecstaskdefinitionplacementconstraintsdetails
from . import awsecstaskdefinitionproxyconfigurationdetails
from . import awsecstaskdefinitionvolumesdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionDetails:
    container_definitions: Optional[List[awsecstaskdefinitioncontainerdefinitionsdetails.AwsEcsTaskDefinitionContainerDefinitionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerDefinitions' }})
    cpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cpu' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Family' }})
    inference_accelerators: Optional[List[awsecstaskdefinitioninferenceacceleratorsdetails.AwsEcsTaskDefinitionInferenceAcceleratorsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InferenceAccelerators' }})
    ipc_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpcMode' }})
    memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Memory' }})
    network_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkMode' }})
    pid_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PidMode' }})
    placement_constraints: Optional[List[awsecstaskdefinitionplacementconstraintsdetails.AwsEcsTaskDefinitionPlacementConstraintsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementConstraints' }})
    proxy_configuration: Optional[awsecstaskdefinitionproxyconfigurationdetails.AwsEcsTaskDefinitionProxyConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProxyConfiguration' }})
    requires_compatibilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequiresCompatibilities' }})
    task_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskRoleArn' }})
    volumes: Optional[List[awsecstaskdefinitionvolumesdetails.AwsEcsTaskDefinitionVolumesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Volumes' }})
    
