import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";


// GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict
/** 
 * Describes a routing conflict that may cause a deployment not to receive traffic at some base path.
**/
export class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictingDeployment" })
  conflictingDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentGroup" })
  environmentGroup?: string;
}
