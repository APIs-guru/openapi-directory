import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutRecordsRequestEntry } from "./putrecordsrequestentry";



// PutRecordsInput
/** 
 * A <code>PutRecords</code> request.
**/
export class PutRecordsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Records", elemType: PutRecordsRequestEntry })
  records: PutRecordsRequestEntry[];

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
