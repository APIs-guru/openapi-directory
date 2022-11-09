import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
/** 
 * Determines whether a service deployment fails if a service cannot reach a steady state.
**/
export class AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enable" })
  enable?: boolean;

  @Metadata({ data: "json, name=Rollback" })
  rollback?: boolean;
}
