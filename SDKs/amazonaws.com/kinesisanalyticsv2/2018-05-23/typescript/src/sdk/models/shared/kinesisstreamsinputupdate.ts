import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsInputUpdate
/** 
 * When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.
**/
export class KinesisStreamsInputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
