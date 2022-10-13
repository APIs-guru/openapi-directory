from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails:
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerPath' }})
    host_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostPath' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permissions' }})
    
