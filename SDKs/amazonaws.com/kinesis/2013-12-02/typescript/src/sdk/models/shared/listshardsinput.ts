import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShardFilter } from "./shardfilter";


export class ListShardsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartShardId" })
  exclusiveStartShardId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ShardFilter" })
  shardFilter?: ShardFilter;

  @Metadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp?: Date;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}
