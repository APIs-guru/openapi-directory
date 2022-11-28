import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MergeShardsInput
/** 
 * Represents the input for <code>MergeShards</code>.
**/
export class MergeShardsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdjacentShardToMerge" })
  adjacentShardToMerge: string;

  @SpeakeasyMetadata({ data: "json, name=ShardToMerge" })
  shardToMerge: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
