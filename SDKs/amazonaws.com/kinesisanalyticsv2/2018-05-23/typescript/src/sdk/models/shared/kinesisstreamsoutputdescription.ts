import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsOutputDescription
/** 
 * For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. 
**/
export class KinesisStreamsOutputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
