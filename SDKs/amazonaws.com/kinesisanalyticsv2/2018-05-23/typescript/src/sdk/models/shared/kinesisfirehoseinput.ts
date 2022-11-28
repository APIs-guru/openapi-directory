import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseInput
/** 
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
**/
export class KinesisFirehoseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
