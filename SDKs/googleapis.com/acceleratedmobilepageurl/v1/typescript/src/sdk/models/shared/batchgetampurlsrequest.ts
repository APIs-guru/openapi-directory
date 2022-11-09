import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BatchGetAmpUrlsRequestLookupStrategyEnum {
    FetchLiveDoc = "FETCH_LIVE_DOC"
,    InIndexDoc = "IN_INDEX_DOC"
}


// BatchGetAmpUrlsRequest
/** 
 * AMP URL request for a batch of URLs.
**/
export class BatchGetAmpUrlsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lookupStrategy" })
  lookupStrategy?: BatchGetAmpUrlsRequestLookupStrategyEnum;

  @Metadata({ data: "json, name=urls" })
  urls?: string[];
}
