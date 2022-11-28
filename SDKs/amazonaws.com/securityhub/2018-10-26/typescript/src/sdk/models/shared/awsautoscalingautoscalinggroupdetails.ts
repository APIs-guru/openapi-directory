import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsAutoScalingAutoScalingGroupDetails
/** 
 * Provides details about an auto scaling group.
**/
export class AwsAutoScalingAutoScalingGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckGracePeriod" })
  healthCheckGracePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckType" })
  healthCheckType?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchConfigurationName" })
  launchConfigurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=LoadBalancerNames" })
  loadBalancerNames?: string[];
}
