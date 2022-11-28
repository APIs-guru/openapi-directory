import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryStatistics
/** 
 * Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.
**/
export class QueryStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesScanned" })
  bytesScanned?: number;

  @SpeakeasyMetadata({ data: "json, name=recordsMatched" })
  recordsMatched?: number;

  @SpeakeasyMetadata({ data: "json, name=recordsScanned" })
  recordsScanned?: number;
}
