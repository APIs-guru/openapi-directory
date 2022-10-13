from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1deploymentchangereportroutingdeployment
from . import googlecloudapigeev1deploymentchangereportroutingdeployment


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReportRoutingChange:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    environment_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentGroup' }})
    from_deployment: Optional[googlecloudapigeev1deploymentchangereportroutingdeployment.GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromDeployment' }})
    should_sequence_rollout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shouldSequenceRollout' }})
    to_deployment: Optional[googlecloudapigeev1deploymentchangereportroutingdeployment.GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toDeployment' }})
    
