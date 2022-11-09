import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment.
**/
export declare class HealthCheck extends SpeakeasyBase {
    checkInterval?: string;
    disableHealthCheck?: boolean;
    healthyThreshold?: number;
    host?: string;
    restartThreshold?: number;
    timeout?: string;
    unhealthyThreshold?: number;
}
