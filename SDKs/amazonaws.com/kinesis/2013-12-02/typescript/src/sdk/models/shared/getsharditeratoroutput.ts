import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetShardIteratorOutput
/** 
 * Represents the output for <code>GetShardIterator</code>.
**/
export class GetShardIteratorOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardIterator" })
  shardIterator?: string;
}
