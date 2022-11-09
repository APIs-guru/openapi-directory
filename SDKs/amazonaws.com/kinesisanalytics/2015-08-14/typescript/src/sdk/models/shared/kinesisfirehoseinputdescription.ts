import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseInputDescription
/** 
 *  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. 
**/
export class KinesisFirehoseInputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
