import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetShardIteratorOutput
/** 
 * Represents the output for <code>GetShardIterator</code>.
**/
export class GetShardIteratorOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardIterator" })
  shardIterator?: string;
}
