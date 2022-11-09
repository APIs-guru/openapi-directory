import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2VolumeAttachment
/** 
 * An attachment to an Amazon EC2 volume.
**/
export class AwsEc2VolumeAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachTime" })
  attachTime?: string;

  @Metadata({ data: "json, name=DeleteOnTermination" })
  deleteOnTermination?: boolean;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
