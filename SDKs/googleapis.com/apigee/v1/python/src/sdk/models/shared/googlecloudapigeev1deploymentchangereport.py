from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeploymentChangeReport:
    r"""GoogleCloudApigeeV1DeploymentChangeReport
    Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.
    """
    
    routing_changes: Optional[List[GoogleCloudApigeeV1DeploymentChangeReportRoutingChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingChanges') }})
    routing_conflicts: Optional[List[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingConflicts') }})
    validation_errors: Optional[GoogleRPCPreconditionFailure] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    
