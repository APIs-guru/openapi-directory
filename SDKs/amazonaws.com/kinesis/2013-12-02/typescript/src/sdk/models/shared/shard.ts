import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HashKeyRange } from "./hashkeyrange";
import { SequenceNumberRange } from "./sequencenumberrange";


// Shard
/** 
 * A uniquely identified group of data records in a Kinesis data stream.
**/
export class Shard extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdjacentParentShardId" })
  adjacentParentShardId?: string;

  @Metadata({ data: "json, name=HashKeyRange" })
  hashKeyRange: HashKeyRange;

  @Metadata({ data: "json, name=ParentShardId" })
  parentShardId?: string;

  @Metadata({ data: "json, name=SequenceNumberRange" })
  sequenceNumberRange: SequenceNumberRange;

  @Metadata({ data: "json, name=ShardId" })
  shardId: string;
}
