import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsInputDescription
/** 
 *  Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration. 
**/
export class KinesisStreamsInputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
