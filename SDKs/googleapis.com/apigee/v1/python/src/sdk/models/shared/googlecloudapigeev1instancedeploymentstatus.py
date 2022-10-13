from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1instancedeploymentstatusdeployedrevision
from . import googlecloudapigeev1instancedeploymentstatusdeployedroute


@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceDeploymentStatus:
    deployed_revisions: Optional[List[googlecloudapigeev1instancedeploymentstatusdeployedrevision.GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployedRevisions' }})
    deployed_routes: Optional[List[googlecloudapigeev1instancedeploymentstatusdeployedroute.GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployedRoutes' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    
