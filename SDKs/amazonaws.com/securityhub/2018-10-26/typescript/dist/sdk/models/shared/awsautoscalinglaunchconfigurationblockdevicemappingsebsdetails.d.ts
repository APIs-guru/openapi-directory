import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters that are used to automatically set up EBS volumes when an instance is launched.
**/
export declare class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    snapshotId?: string;
    volumeSize?: number;
    volumeType?: string;
}
