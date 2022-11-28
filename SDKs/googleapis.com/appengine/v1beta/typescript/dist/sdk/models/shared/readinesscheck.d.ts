import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.
**/
export declare class ReadinessCheck extends SpeakeasyBase {
    appStartTimeout?: string;
    checkInterval?: string;
    failureThreshold?: number;
    host?: string;
    path?: string;
    successThreshold?: number;
    timeout?: string;
}
