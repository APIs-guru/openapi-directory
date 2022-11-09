import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetShardIteratorOutput
/** 
 * Represents the output of a <code>GetShardIterator</code> operation.
**/
export class GetShardIteratorOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardIterator" })
  shardIterator?: string;
}
