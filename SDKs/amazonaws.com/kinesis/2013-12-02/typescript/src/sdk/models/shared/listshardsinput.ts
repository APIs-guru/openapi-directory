import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShardFilter } from "./shardfilter";



export class ListShardsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartShardId" })
  exclusiveStartShardId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ShardFilter" })
  shardFilter?: ShardFilter;

  @SpeakeasyMetadata({ data: "json, name=StreamCreationTimestamp" })
  streamCreationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}
