import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchedLogStream
/** 
 * Represents the search status of a log stream.
**/
export class SearchedLogStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @Metadata({ data: "json, name=searchedCompletely" })
  searchedCompletely?: boolean;
}
