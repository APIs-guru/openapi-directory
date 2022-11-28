import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VolumeAttachment } from "./awsec2volumeattachment";



// AwsEc2VolumeDetails
/** 
 * Details about an EC2 volume.
**/
export class AwsEc2VolumeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: AwsEc2VolumeAttachment })
  attachments?: AwsEc2VolumeAttachment[];

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
