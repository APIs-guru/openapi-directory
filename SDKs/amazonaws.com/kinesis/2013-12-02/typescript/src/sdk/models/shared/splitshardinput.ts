import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SplitShardInput
/** 
 * Represents the input for <code>SplitShard</code>.
**/
export class SplitShardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NewStartingHashKey" })
  newStartingHashKey: string;

  @SpeakeasyMetadata({ data: "json, name=ShardToSplit" })
  shardToSplit: string;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
