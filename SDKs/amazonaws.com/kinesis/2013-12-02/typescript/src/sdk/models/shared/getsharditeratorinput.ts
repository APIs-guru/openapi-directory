import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardIteratorTypeEnum } from "./sharditeratortypeenum";


// GetShardIteratorInput
/** 
 * Represents the input for <code>GetShardIterator</code>.
**/
export class GetShardIteratorInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardId" })
  shardId: string;

  @Metadata({ data: "json, name=ShardIteratorType" })
  shardIteratorType: ShardIteratorTypeEnum;

  @Metadata({ data: "json, name=StartingSequenceNumber" })
  startingSequenceNumber?: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
