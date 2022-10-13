from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails:
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerName' }})
    
