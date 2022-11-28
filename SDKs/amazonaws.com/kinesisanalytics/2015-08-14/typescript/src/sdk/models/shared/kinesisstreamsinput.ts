import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsInput
/** 
 *  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
**/
export class KinesisStreamsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
