import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>MergeShards</code>.
**/
export declare class MergeShardsInput extends SpeakeasyBase {
    adjacentShardToMerge: string;
    shardToMerge: string;
    streamName: string;
}
