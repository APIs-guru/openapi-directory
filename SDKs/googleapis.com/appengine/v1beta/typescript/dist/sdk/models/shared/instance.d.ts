import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum InstanceAvailabilityEnum {
    Unspecified = "UNSPECIFIED",
    Resident = "RESIDENT",
    Dynamic = "DYNAMIC"
}
export declare enum InstanceVmLivenessEnum {
    LivenessStateUnspecified = "LIVENESS_STATE_UNSPECIFIED",
    Unknown = "UNKNOWN",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Draining = "DRAINING",
    Timeout = "TIMEOUT"
}
/**
 * An Instance resource is the computing unit that App Engine uses to automatically scale an application.
**/
export declare class Instance extends SpeakeasyBase {
    appEngineRelease?: string;
    availability?: InstanceAvailabilityEnum;
    averageLatency?: number;
    errors?: number;
    id?: string;
    memoryUsage?: string;
    name?: string;
    qps?: number;
    requests?: number;
    startTime?: string;
    vmDebugEnabled?: boolean;
    vmId?: string;
    vmIp?: string;
    vmLiveness?: InstanceVmLivenessEnum;
    vmName?: string;
    vmStatus?: string;
    vmZoneName?: string;
}
