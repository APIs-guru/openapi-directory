import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2NetworkInterfaceAttachment
/** 
 * Information about the network interface attachment.
**/
export class AwsEc2NetworkInterfaceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachTime" })
  attachTime?: string;

  @SpeakeasyMetadata({ data: "json, name=AttachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeviceIndex" })
  deviceIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceOwnerId" })
  instanceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
