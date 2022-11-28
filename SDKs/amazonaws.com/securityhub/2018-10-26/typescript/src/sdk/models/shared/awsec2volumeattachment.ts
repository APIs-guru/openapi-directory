import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2VolumeAttachment
/** 
 * An attachment to an Amazon EC2 volume.
**/
export class AwsEc2VolumeAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachTime" })
  attachTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
