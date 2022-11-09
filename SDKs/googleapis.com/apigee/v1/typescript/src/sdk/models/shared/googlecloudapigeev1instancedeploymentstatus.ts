import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision } from "./googlecloudapigeev1instancedeploymentstatusdeployedrevision";
import { GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute } from "./googlecloudapigeev1instancedeploymentstatusdeployedroute";


// GoogleCloudApigeeV1InstanceDeploymentStatus
/** 
 * The status of a deployment as reported by a single instance.
**/
export class GoogleCloudApigeeV1InstanceDeploymentStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployedRevisions", elemType: shared.GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision })
  deployedRevisions?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision[];

  @Metadata({ data: "json, name=deployedRoutes", elemType: shared.GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute })
  deployedRoutes?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute[];

  @Metadata({ data: "json, name=instance" })
  instance?: string;
}
