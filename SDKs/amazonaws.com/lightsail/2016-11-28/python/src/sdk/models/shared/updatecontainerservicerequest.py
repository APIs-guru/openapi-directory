from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import containerservicepowername_enum


@dataclass_json
@dataclass
class UpdateContainerServiceRequest:
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDisabled' }})
    power: Optional[containerservicepowername_enum.ContainerServicePowerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power' }})
    public_domain_names: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicDomainNames' }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scale' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
