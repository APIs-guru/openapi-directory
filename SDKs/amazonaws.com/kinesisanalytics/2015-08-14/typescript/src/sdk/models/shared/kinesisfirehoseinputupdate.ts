import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseInputUpdate
/** 
 * When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
**/
export class KinesisFirehoseInputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate?: string;

  @Metadata({ data: "json, name=RoleARNUpdate" })
  roleArnUpdate?: string;
}
