import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
**/
export declare class KinesisFirehoseInput extends SpeakeasyBase {
    resourceArn: string;
}
