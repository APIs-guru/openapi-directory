import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment } from "./googlecloudapigeev1deploymentchangereportroutingdeployment";
/**
 * Describes a potential routing change that may occur as a result of some deployment operation.
**/
export declare class GoogleCloudApigeeV1DeploymentChangeReportRoutingChange extends SpeakeasyBase {
    description?: string;
    environmentGroup?: string;
    fromDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;
    shouldSequenceRollout?: boolean;
    toDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment;
}
