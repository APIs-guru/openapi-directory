import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails } from "./awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails";
/**
 * Optional deployment parameters for the service.
**/
export declare class AwsEcsServiceDeploymentConfigurationDetails extends SpeakeasyBase {
    deploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;
    maximumPercent?: number;
    minimumHealthyPercent?: number;
}
