import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.
**/
export declare class LivenessCheck extends SpeakeasyBase {
    checkInterval?: string;
    failureThreshold?: number;
    host?: string;
    initialDelay?: string;
    path?: string;
    successThreshold?: number;
    timeout?: string;
}
