from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails:
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerPort' }})
    host_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HostPort' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protocol' }})
    
