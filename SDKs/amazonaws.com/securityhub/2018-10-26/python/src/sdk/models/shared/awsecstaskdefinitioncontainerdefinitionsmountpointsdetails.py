from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails:
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerPath' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadOnly' }})
    source_volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceVolume' }})
    
