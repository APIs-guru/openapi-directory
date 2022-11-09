import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails";


// AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
/** 
 * A block device for the instance.
**/
export class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=Ebs" })
  ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;

  @Metadata({ data: "json, name=NoDevice" })
  noDevice?: boolean;

  @Metadata({ data: "json, name=VirtualName" })
  virtualName?: string;
}
