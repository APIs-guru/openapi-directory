import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}
/**
 * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
**/
export declare class GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo extends SpeakeasyBase {
    id?: string;
    resource?: Map<string, any>;
    status?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum;
    sub?: GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[];
    time?: string;
}
