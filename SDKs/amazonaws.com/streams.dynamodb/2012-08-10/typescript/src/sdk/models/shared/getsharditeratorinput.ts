import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardIteratorTypeEnum } from "./sharditeratortypeenum";


// GetShardIteratorInput
/** 
 * Represents the input of a <code>GetShardIterator</code> operation.
**/
export class GetShardIteratorInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: string;

  @Metadata({ data: "json, name=ShardId" })
  shardId: string;

  @Metadata({ data: "json, name=ShardIteratorType" })
  shardIteratorType: ShardIteratorTypeEnum;

  @Metadata({ data: "json, name=StreamArn" })
  streamArn: string;
}
