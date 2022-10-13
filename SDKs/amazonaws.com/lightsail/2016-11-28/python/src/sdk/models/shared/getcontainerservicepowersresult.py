from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerservicepower


@dataclass_json
@dataclass
class GetContainerServicePowersResult:
    powers: Optional[List[containerservicepower.ContainerServicePower]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powers' }})
    
