import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseOutputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
**/
export class KinesisFirehoseOutputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
