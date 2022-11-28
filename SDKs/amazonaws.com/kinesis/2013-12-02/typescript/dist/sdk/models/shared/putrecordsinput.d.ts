import { SpeakeasyBase } from "../../../internal/utils";
import { PutRecordsRequestEntry } from "./putrecordsrequestentry";
/**
 * A <code>PutRecords</code> request.
**/
export declare class PutRecordsInput extends SpeakeasyBase {
    records: PutRecordsRequestEntry[];
    streamName: string;
}
