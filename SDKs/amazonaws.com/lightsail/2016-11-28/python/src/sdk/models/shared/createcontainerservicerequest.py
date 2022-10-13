from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerservicedeploymentrequest
from . import containerservicepowername_enum
from . import tag


@dataclass_json
@dataclass
class CreateContainerServiceRequest:
    deployment: Optional[containerservicedeploymentrequest.ContainerServiceDeploymentRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment' }})
    power: containerservicepowername_enum.ContainerServicePowerNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power' }})
    public_domain_names: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicDomainNames' }})
    scale: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
