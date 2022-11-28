import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails";



// AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
/** 
 * A block device for the instance.
**/
export class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Ebs" })
  ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;

  @SpeakeasyMetadata({ data: "json, name=NoDevice" })
  noDevice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VirtualName" })
  virtualName?: string;
}
