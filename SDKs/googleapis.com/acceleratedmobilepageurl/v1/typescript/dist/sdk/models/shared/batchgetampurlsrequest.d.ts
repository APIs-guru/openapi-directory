import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum BatchGetAmpUrlsRequestLookupStrategyEnum {
    FetchLiveDoc = "FETCH_LIVE_DOC",
    InIndexDoc = "IN_INDEX_DOC"
}
/**
 * AMP URL request for a batch of URLs.
**/
export declare class BatchGetAmpUrlsRequest extends SpeakeasyBase {
    lookupStrategy?: BatchGetAmpUrlsRequestLookupStrategyEnum;
    urls?: string[];
}
