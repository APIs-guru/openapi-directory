import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRecordsInput
/** 
 * Represents the input of a <code>GetRecords</code> operation.
**/
export class GetRecordsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=ShardIterator" })
  shardIterator: string;
}
