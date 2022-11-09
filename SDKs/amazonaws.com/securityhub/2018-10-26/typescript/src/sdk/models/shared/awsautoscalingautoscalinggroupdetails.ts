import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsAutoScalingAutoScalingGroupDetails
/** 
 * Provides details about an auto scaling group.
**/
export class AwsAutoScalingAutoScalingGroupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=HealthCheckGracePeriod" })
  healthCheckGracePeriod?: number;

  @Metadata({ data: "json, name=HealthCheckType" })
  healthCheckType?: string;

  @Metadata({ data: "json, name=LaunchConfigurationName" })
  launchConfigurationName?: string;

  @Metadata({ data: "json, name=LoadBalancerNames" })
  loadBalancerNames?: string[];
}
