import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines whether a service deployment fails if a service cannot reach a steady state.
**/
export declare class AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails extends SpeakeasyBase {
    enable?: boolean;
    rollback?: boolean;
}
