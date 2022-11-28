import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResourceInfoStatusEnum {
    HealthStatusUnspecified = "HEALTH_STATUS_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unresponsive = "UNRESPONSIVE",
    Degraded = "DEGRADED"
}
/**
 * ResourceInfo represents the information/status of the associated resource.
**/
export declare class ResourceInfo extends SpeakeasyBase {
    id?: string;
    resource?: Map<string, any>;
    status?: ResourceInfoStatusEnum;
    sub?: ResourceInfo[];
    time?: string;
}
