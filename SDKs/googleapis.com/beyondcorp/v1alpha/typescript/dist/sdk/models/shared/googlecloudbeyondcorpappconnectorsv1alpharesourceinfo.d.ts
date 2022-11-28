import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}
/**
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo extends SpeakeasyBase {
    id?: string;
    resource?: Map<string, any>;
    status?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum;
    sub?: GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo[];
    time?: string;
}
