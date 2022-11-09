import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryStatistics
/** 
 * Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
**/
export class QueryStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytesScanned" })
  bytesScanned?: number;

  @Metadata({ data: "json, name=recordsMatched" })
  recordsMatched?: number;

  @Metadata({ data: "json, name=recordsScanned" })
  recordsScanned?: number;
}
