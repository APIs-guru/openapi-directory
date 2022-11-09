import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { PutRecordsResultEntry } from "./putrecordsresultentry";


// PutRecordsOutput
/** 
 *  <code>PutRecords</code> results.
**/
export class PutRecordsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: EncryptionTypeEnum;

  @Metadata({ data: "json, name=FailedRecordCount" })
  failedRecordCount?: number;

  @Metadata({ data: "json, name=Records", elemType: shared.PutRecordsResultEntry })
  records: PutRecordsResultEntry[];
}
