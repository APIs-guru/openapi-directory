import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SequenceNumberRange } from "./sequencenumberrange";


// Shard
/** 
 * A uniquely identified group of stream records within a stream.
**/
export class Shard extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParentShardId" })
  parentShardId?: string;

  @Metadata({ data: "json, name=SequenceNumberRange" })
  sequenceNumberRange?: SequenceNumberRange;

  @Metadata({ data: "json, name=ShardId" })
  shardId?: string;
}
