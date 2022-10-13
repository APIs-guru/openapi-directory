from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerserviceregistrylogin


@dataclass_json
@dataclass
class CreateContainerServiceRegistryLoginResult:
    registry_login: Optional[containerserviceregistrylogin.ContainerServiceRegistryLogin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryLogin' }})
    
