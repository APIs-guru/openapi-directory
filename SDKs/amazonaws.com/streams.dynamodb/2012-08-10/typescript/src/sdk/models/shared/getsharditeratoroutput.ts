import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetShardIteratorOutput
/** 
 * Represents the output of a <code>GetShardIterator</code> operation.
**/
export class GetShardIteratorOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardIterator" })
  shardIterator?: string;
}
