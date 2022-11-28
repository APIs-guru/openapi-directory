import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShardIteratorTypeEnum } from "./sharditeratortypeenum";



// GetShardIteratorInput
/** 
 * Represents the input for <code>GetShardIterator</code>.
**/
export class GetShardIteratorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId: string;

  @SpeakeasyMetadata({ data: "json, name=ShardIteratorType" })
  shardIteratorType: ShardIteratorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartingSequenceNumber" })
  startingSequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
