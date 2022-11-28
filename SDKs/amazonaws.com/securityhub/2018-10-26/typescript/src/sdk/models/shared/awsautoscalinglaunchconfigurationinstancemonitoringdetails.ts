import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails
/** 
 * Information about the type of monitoring for instances in the group.
**/
export class AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
