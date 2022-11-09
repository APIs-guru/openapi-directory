import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseOutput
/** 
 * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream. 
**/
export class KinesisFirehoseOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
