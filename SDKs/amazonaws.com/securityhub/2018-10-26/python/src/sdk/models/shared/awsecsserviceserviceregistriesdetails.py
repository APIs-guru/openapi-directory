from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsServiceServiceRegistriesDetails:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerName' }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerPort' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    registry_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryArn' }})
    
