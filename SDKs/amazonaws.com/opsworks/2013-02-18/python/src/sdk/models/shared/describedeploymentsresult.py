from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deployment


@dataclass_json
@dataclass
class DescribeDeploymentsResult:
    deployments: Optional[List[deployment.Deployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deployments' }})
    
