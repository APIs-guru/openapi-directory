import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HashKeyRange } from "./hashkeyrange";
import { SequenceNumberRange } from "./sequencenumberrange";



// Shard
/** 
 * A uniquely identified group of data records in a Kinesis data stream.
**/
export class Shard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdjacentParentShardId" })
  adjacentParentShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=HashKeyRange" })
  hashKeyRange: HashKeyRange;

  @SpeakeasyMetadata({ data: "json, name=ParentShardId" })
  parentShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumberRange" })
  sequenceNumberRange: SequenceNumberRange;

  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId: string;
}
