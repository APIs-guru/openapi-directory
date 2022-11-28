import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRecordsInput
/** 
 * Represents the input for <a>GetRecords</a>.
**/
export class GetRecordsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=ShardIterator" })
  shardIterator: string;
}
