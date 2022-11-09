import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsInputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. 
**/
export class KinesisStreamsInputDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
