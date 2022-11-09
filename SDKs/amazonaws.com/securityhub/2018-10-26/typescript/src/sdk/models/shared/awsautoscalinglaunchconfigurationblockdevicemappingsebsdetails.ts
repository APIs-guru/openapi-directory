import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails
/** 
 * Parameters that are used to automatically set up EBS volumes when an instance is launched.
**/
export class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=VolumeSize" })
  volumeSize?: number;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType?: string;
}
