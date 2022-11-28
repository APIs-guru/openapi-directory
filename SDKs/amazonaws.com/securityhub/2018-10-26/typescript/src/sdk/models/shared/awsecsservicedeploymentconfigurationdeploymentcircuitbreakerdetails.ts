import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
/** 
 * Determines whether a service deployment fails if a service cannot reach a steady state.
**/
export class AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enable" })
  enable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Rollback" })
  rollback?: boolean;
}
