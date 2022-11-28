import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisStreamsInputDescription
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration. 
**/
export class KinesisStreamsInputDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARN" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;
}
