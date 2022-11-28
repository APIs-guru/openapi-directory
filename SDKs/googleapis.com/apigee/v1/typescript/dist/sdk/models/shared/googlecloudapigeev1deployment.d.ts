import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleCloudApigeeV1InstanceDeploymentStatus } from "./googlecloudapigeev1instancedeploymentstatus";
import { GoogleCloudApigeeV1PodStatus } from "./googlecloudapigeev1podstatus";
import { GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict } from "./googlecloudapigeev1deploymentchangereportroutingconflict";
export declare enum GoogleCloudApigeeV1DeploymentStateEnum {
    RuntimeStateUnspecified = "RUNTIME_STATE_UNSPECIFIED",
    Ready = "READY",
    Progressing = "PROGRESSING",
    Error = "ERROR"
}
export declare class GoogleCloudApigeeV1Deployment extends SpeakeasyBase {
    apiProxy?: string;
    deployStartTime?: string;
    environment?: string;
    errors?: GoogleRpcStatus[];
    instances?: GoogleCloudApigeeV1InstanceDeploymentStatus[];
    pods?: GoogleCloudApigeeV1PodStatus[];
    revision?: string;
    routeConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[];
    serviceAccount?: string;
    state?: GoogleCloudApigeeV1DeploymentStateEnum;
}
