import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
**/
export declare class KinesisStreamsInput extends SpeakeasyBase {
    resourceArn: string;
    roleArn: string;
}
