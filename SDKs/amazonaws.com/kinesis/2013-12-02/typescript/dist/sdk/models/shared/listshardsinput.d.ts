import { SpeakeasyBase } from "../../../internal/utils";
import { ShardFilter } from "./shardfilter";
export declare class ListShardsInput extends SpeakeasyBase {
    exclusiveStartShardId?: string;
    maxResults?: number;
    nextToken?: string;
    shardFilter?: ShardFilter;
    streamCreationTimestamp?: Date;
    streamName?: string;
}
