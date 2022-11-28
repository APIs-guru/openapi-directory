import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";
/**
 * Describes a routing conflict that may cause a deployment not to receive traffic at some base path.
**/
export declare class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict extends SpeakeasyBase {
    conflictingDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;
    description?: string;
    environmentGroup?: string;
}
