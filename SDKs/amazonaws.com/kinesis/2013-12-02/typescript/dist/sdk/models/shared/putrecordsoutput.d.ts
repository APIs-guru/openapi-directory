import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { PutRecordsResultEntry } from "./putrecordsresultentry";
/**
 *  <code>PutRecords</code> results.
**/
export declare class PutRecordsOutput extends SpeakeasyBase {
    encryptionType?: EncryptionTypeEnum;
    failedRecordCount?: number;
    records: PutRecordsResultEntry[];
}
