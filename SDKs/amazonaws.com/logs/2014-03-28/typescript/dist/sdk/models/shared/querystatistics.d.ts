import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
**/
export declare class QueryStatistics extends SpeakeasyBase {
    bytesScanned?: number;
    recordsMatched?: number;
    recordsScanned?: number;
}
