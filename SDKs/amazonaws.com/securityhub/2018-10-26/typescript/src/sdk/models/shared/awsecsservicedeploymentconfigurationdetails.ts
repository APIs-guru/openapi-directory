import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails } from "./awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails";


// AwsEcsServiceDeploymentConfigurationDetails
/** 
 * Optional deployment parameters for the service.
**/
export class AwsEcsServiceDeploymentConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeploymentCircuitBreaker" })
  deploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;

  @Metadata({ data: "json, name=MaximumPercent" })
  maximumPercent?: number;

  @Metadata({ data: "json, name=MinimumHealthyPercent" })
  minimumHealthyPercent?: number;
}
