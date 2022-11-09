import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsOutputDescription
/** 
 * For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. 
**/
export class KinesisStreamsOutputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
