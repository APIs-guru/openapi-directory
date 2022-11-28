import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseInputDescription
/** 
 *  Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration. 
**/
export class KinesisFirehoseInputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
