import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";



// GoogleCloudApigeeV1DeploymentChangeReportRoutingChange
/** 
 * Describes a potential routing change that may occur as a result of some deployment operation.
**/
export class GoogleCloudApigeeV1DeploymentChangeReportRoutingChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentGroup" })
  environmentGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDeployment" })
  fromDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;

  @SpeakeasyMetadata({ data: "json, name=shouldSequenceRollout" })
  shouldSequenceRollout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toDeployment" })
  toDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;
}
