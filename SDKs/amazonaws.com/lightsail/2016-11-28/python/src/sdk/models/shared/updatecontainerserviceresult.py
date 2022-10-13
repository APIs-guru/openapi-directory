from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerservice


@dataclass_json
@dataclass
class UpdateContainerServiceResult:
    container_service: Optional[containerservice.ContainerService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerService' }})
    
