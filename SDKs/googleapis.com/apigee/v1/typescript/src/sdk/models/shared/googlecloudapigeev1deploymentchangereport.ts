import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingChange } from "./googlecloudapigeev1deploymentchangereportroutingchange";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict } from "./googlecloudapigeev1deploymentchangereportroutingconflict";
import { GoogleRpcPreconditionFailure } from "./googlerpcpreconditionfailure";



// GoogleCloudApigeeV1DeploymentChangeReport
/** 
 * Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.
**/
export class GoogleCloudApigeeV1DeploymentChangeReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=routingChanges", elemType: GoogleCloudApigeeV1DeploymentChangeReportRoutingChange })
  routingChanges?: GoogleCloudApigeeV1DeploymentChangeReportRoutingChange[];

  @SpeakeasyMetadata({ data: "json, name=routingConflicts", elemType: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict })
  routingConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[];

  @SpeakeasyMetadata({ data: "json, name=validationErrors" })
  validationErrors?: GoogleRpcPreconditionFailure;
}
