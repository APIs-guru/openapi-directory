import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KinesisStreamsOutputUpdate
/** 
 * When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.
**/
export class KinesisStreamsOutputUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceARNUpdate" })
  resourceArnUpdate: string;
}
