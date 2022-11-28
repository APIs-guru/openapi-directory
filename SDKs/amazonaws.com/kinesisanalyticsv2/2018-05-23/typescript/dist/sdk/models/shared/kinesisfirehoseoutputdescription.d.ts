import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
**/
export declare class KinesisFirehoseOutputDescription extends SpeakeasyBase {
    resourceArn: string;
    roleArn?: string;
}
