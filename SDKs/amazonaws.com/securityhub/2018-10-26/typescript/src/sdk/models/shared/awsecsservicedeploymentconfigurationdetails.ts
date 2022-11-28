import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails } from "./awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails";



// AwsEcsServiceDeploymentConfigurationDetails
/** 
 * Optional deployment parameters for the service.
**/
export class AwsEcsServiceDeploymentConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeploymentCircuitBreaker" })
  deploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;

  @SpeakeasyMetadata({ data: "json, name=MaximumPercent" })
  maximumPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=MinimumHealthyPercent" })
  minimumHealthyPercent?: number;
}
