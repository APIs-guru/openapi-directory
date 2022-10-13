from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerservice


@dataclass_json
@dataclass
class ContainerServicesListResult:
    container_services: Optional[List[containerservice.ContainerService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerServices' }})
    
