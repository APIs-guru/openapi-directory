from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1deploymentchangereportroutingchange
from . import googlecloudapigeev1deploymentchangereportroutingconflict
from . import googlerpcpreconditionfailure


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReport:
    routing_changes: Optional[List[googlecloudapigeev1deploymentchangereportroutingchange.GoogleCloudApigeeV1DeploymentChangeReportRoutingChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingChanges' }})
    routing_conflicts: Optional[List[googlecloudapigeev1deploymentchangereportroutingconflict.GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routingConflicts' }})
    validation_errors: Optional[googlerpcpreconditionfailure.GoogleRPCPreconditionFailure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationErrors' }})
    
