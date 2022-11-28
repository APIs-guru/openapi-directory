import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";



// GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict
/** 
 * Describes a routing conflict that may cause a deployment not to receive traffic at some base path.
**/
export class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictingDeployment" })
  conflictingDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentGroup" })
  environmentGroup?: string;
}
