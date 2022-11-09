import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SplitShardInput
/** 
 * Represents the input for <code>SplitShard</code>.
**/
export class SplitShardInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NewStartingHashKey" })
  newStartingHashKey: string;

  @Metadata({ data: "json, name=ShardToSplit" })
  shardToSplit: string;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
