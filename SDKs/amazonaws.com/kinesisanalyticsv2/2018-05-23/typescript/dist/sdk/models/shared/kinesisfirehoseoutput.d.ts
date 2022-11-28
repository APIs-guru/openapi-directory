import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.
**/
export declare class KinesisFirehoseOutput extends SpeakeasyBase {
    resourceArn: string;
}
