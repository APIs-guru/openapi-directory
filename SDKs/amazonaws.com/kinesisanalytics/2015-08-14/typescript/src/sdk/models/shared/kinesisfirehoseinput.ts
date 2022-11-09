import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseInput
/** 
 *  Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
**/
export class KinesisFirehoseInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
