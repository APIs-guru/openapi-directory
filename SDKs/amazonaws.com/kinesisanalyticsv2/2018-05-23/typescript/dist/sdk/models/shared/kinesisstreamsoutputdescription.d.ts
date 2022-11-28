import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.
**/
export declare class KinesisStreamsOutputDescription extends SpeakeasyBase {
    resourceArn: string;
    roleArn?: string;
}
