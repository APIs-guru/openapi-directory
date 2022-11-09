import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsInputUpdate
/** 
 * When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
**/
export class KinesisStreamsInputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate?: string;

  @Metadata({ data: "json, name=RoleARNUpdate" })
  roleArnUpdate?: string;
}
