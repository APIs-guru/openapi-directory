import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutRecordsRequestEntry } from "./putrecordsrequestentry";


// PutRecordsInput
/** 
 * A <code>PutRecords</code> request.
**/
export class PutRecordsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Records", elemType: shared.PutRecordsRequestEntry })
  records: PutRecordsRequestEntry[];

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
