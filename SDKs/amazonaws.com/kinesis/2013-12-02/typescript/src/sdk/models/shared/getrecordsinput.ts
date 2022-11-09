import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetRecordsInput
/** 
 * Represents the input for <a>GetRecords</a>.
**/
export class GetRecordsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=ShardIterator" })
  shardIterator: string;
}
