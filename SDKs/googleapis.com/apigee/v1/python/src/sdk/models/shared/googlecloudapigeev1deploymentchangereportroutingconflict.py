from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1deploymentchangereportroutingdeployment


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict:
    conflicting_deployment: Optional[googlecloudapigeev1deploymentchangereportroutingdeployment.GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictingDeployment' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentGroup' }})
    
