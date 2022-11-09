import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VolumeTypeEnum } from "./volumetypeenum";


// EbsBlockDevice
/** 
 * Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
**/
export class EbsBlockDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=VolumeSize" })
  volumeSize?: number;

  @Metadata({ data: "json, name=VolumeType" })
  volumeType?: VolumeTypeEnum;
}
