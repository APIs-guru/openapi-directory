import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsOutput
/** 
 * When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
**/
export class KinesisStreamsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
