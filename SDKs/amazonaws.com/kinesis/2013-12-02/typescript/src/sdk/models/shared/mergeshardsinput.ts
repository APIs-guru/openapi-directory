import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MergeShardsInput
/** 
 * Represents the input for <code>MergeShards</code>.
**/
export class MergeShardsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdjacentShardToMerge" })
  adjacentShardToMerge: string;

  @Metadata({ data: "json, name=ShardToMerge" })
  shardToMerge: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
