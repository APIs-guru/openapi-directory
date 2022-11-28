import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { PutRecordsResultEntry } from "./putrecordsresultentry";



// PutRecordsOutput
/** 
 *  <code>PutRecords</code> results.
**/
export class PutRecordsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FailedRecordCount" })
  failedRecordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: PutRecordsResultEntry })
  records: PutRecordsResultEntry[];
}
