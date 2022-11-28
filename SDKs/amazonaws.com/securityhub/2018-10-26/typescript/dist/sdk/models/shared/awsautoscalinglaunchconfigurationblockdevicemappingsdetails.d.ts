import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails";
/**
 * A block device for the instance.
**/
export declare class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails extends SpeakeasyBase {
    deviceName?: string;
    ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;
    noDevice?: boolean;
    virtualName?: string;
}
