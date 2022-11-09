import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails
/** 
 * Information about the type of monitoring for instances in the group.
**/
export class AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;
}
