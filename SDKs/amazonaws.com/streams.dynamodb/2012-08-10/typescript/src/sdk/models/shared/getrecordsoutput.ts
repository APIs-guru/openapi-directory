import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Record } from "./record";


// GetRecordsOutput
/** 
 * Represents the output of a <code>GetRecords</code> operation.
**/
export class GetRecordsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextShardIterator" })
  nextShardIterator?: string;

  @Metadata({ data: "json, name=Records", elemType: shared.Record })
  records?: Record[];
}
