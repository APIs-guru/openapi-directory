import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseOutputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
**/
export class KinesisFirehoseOutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
