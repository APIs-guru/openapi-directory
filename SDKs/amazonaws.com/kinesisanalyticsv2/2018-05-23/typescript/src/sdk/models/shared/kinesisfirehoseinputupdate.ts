import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisFirehoseInputUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.
**/
export class KinesisFirehoseInputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
