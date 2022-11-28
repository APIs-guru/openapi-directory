import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision } from "./googlecloudapigeev1instancedeploymentstatusdeployedrevision";
import { GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute } from "./googlecloudapigeev1instancedeploymentstatusdeployedroute";
/**
 * The status of a deployment as reported by a single instance.
**/
export declare class GoogleCloudApigeeV1InstanceDeploymentStatus extends SpeakeasyBase {
    deployedRevisions?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision[];
    deployedRoutes?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute[];
    instance?: string;
}
