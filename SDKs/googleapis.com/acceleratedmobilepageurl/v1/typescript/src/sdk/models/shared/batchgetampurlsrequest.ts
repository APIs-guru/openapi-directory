import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BatchGetAmpUrlsRequestLookupStrategyEnum {
    FetchLiveDoc = "FETCH_LIVE_DOC",
    InIndexDoc = "IN_INDEX_DOC"
}


// BatchGetAmpUrlsRequest
/** 
 * AMP URL request for a batch of URLs.
**/
export class BatchGetAmpUrlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lookupStrategy" })
  lookupStrategy?: BatchGetAmpUrlsRequestLookupStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=urls" })
  urls?: string[];
}
