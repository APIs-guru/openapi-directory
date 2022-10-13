from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentjob


@dataclass_json
@dataclass
class ListDeploymentJobsResponse:
    deployment_jobs: Optional[List[deploymentjob.DeploymentJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentJobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
