from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerservicedeployment


@dataclass_json
@dataclass
class GetContainerServiceDeploymentsResult:
    deployments: Optional[List[containerservicedeployment.ContainerServiceDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    
