import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";



// GetRecordsOutput
/** 
 * Represents the output of a <code>GetRecords</code> operation.
**/
export class GetRecordsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextShardIterator" })
  nextShardIterator?: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Record })
  records?: Record[];
}
