import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2VolumeAttachment } from "./awsec2volumeattachment";


// AwsEc2VolumeDetails
/** 
 * Details about an EC2 volume.
**/
export class AwsEc2VolumeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attachments", elemType: shared.AwsEc2VolumeAttachment })
  attachments?: AwsEc2VolumeAttachment[];

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
