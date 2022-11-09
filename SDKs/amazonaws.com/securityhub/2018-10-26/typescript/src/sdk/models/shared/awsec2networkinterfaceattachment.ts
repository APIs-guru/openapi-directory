import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2NetworkInterfaceAttachment
/** 
 * Information about the network interface attachment.
**/
export class AwsEc2NetworkInterfaceAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachTime" })
  attachTime?: string;

  @Metadata({ data: "json, name=AttachmentId" })
  attachmentId?: string;

  @Metadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @Metadata({ data: "json, name=DeviceIndex" })
  deviceIndex?: number;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=InstanceOwnerId" })
  instanceOwnerId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
