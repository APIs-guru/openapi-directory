import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>SplitShard</code>.
**/
export declare class SplitShardInput extends SpeakeasyBase {
    newStartingHashKey: string;
    shardToSplit: string;
    streamName: string;
}
