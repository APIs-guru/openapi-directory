import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails
/** 
 * Parameters that are used to automatically set up EBS volumes when an instance is launched.
**/
export class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSize" })
  volumeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
