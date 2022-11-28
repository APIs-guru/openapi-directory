import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision } from "./googlecloudapigeev1instancedeploymentstatusdeployedrevision";
import { GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute } from "./googlecloudapigeev1instancedeploymentstatusdeployedroute";



// GoogleCloudApigeeV1InstanceDeploymentStatus
/** 
 * The status of a deployment as reported by a single instance.
**/
export class GoogleCloudApigeeV1InstanceDeploymentStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployedRevisions", elemType: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision })
  deployedRevisions?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision[];

  @SpeakeasyMetadata({ data: "json, name=deployedRoutes", elemType: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute })
  deployedRoutes?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute[];

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;
}
