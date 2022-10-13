from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails:
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerPath' }})
    mount_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountOptions' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    
