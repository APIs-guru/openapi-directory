import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchedLogStream
/** 
 * Represents the search status of a log stream.
**/
export class SearchedLogStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=searchedCompletely" })
  searchedCompletely?: boolean;
}
