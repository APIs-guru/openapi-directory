import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";


// GoogleCloudApigeeV1DeploymentChangeReportRoutingChange
/** 
 * Describes a potential routing change that may occur as a result of some deployment operation.
**/
export class GoogleCloudApigeeV1DeploymentChangeReportRoutingChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentGroup" })
  environmentGroup?: string;

  @Metadata({ data: "json, name=fromDeployment" })
  fromDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;

  @Metadata({ data: "json, name=shouldSequenceRollout" })
  shouldSequenceRollout?: boolean;

  @Metadata({ data: "json, name=toDeployment" })
  toDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;
}
