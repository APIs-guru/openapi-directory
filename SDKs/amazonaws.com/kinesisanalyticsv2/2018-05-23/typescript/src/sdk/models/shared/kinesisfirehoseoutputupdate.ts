import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KinesisFirehoseOutputUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.
**/
export class KinesisFirehoseOutputUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
