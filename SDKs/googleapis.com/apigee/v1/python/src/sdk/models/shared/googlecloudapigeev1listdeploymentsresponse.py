from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1deployment


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDeploymentsResponse:
    deployments: Optional[List[googlecloudapigeev1deployment.GoogleCloudApigeeV1Deployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    
