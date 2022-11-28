import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";



// EbsBlockDevice
/** 
 * Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
**/
export class EbsBlockDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSize" })
  volumeSize?: number;

  @SpeakeasyMetadata({ data: "json, name=VolumeType" })
  volumeType?: VolumeTypeEnum;
}
