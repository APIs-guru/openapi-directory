import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShardIteratorTypeEnum } from "./sharditeratortypeenum";



// GetShardIteratorInput
/** 
 * Represents the input of a <code>GetShardIterator</code> operation.
**/
export class GetShardIteratorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId: string;

  @SpeakeasyMetadata({ data: "json, name=ShardIteratorType" })
  shardIteratorType: ShardIteratorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StreamArn" })
  streamArn: string;
}
