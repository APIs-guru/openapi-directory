import { SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";
/**
 * Represents the output of a <code>GetRecords</code> operation.
**/
export declare class GetRecordsOutput extends SpeakeasyBase {
    nextShardIterator?: string;
    records?: Record[];
}
