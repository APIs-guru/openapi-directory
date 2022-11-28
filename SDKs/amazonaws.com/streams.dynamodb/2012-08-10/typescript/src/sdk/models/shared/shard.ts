import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SequenceNumberRange } from "./sequencenumberrange";



// Shard
/** 
 * A uniquely identified group of stream records within a stream.
**/
export class Shard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParentShardId" })
  parentShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumberRange" })
  sequenceNumberRange?: SequenceNumberRange;

  @SpeakeasyMetadata({ data: "json, name=ShardId" })
  shardId?: string;
}
