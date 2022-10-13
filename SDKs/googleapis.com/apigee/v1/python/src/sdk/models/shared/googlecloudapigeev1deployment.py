from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus
from . import googlecloudapigeev1instancedeploymentstatus
from . import googlecloudapigeev1podstatus
from . import googlecloudapigeev1deploymentchangereportroutingconflict

class GoogleCloudApigeeV1DeploymentStateEnum(str, Enum):
    RUNTIME_STATE_UNSPECIFIED = "RUNTIME_STATE_UNSPECIFIED"
    READY = "READY"
    PROGRESSING = "PROGRESSING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Deployment:
    api_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiProxy' }})
    deploy_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployStartTime' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    errors: Optional[List[googlerpcstatus.GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    instances: Optional[List[googlecloudapigeev1instancedeploymentstatus.GoogleCloudApigeeV1InstanceDeploymentStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    pods: Optional[List[googlecloudapigeev1podstatus.GoogleCloudApigeeV1PodStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pods' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    route_conflicts: Optional[List[googlecloudapigeev1deploymentchangereportroutingconflict.GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeConflicts' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    state: Optional[GoogleCloudApigeeV1DeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
