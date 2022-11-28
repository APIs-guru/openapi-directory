package shared

type BatchGetAmpUrlsRequestLookupStrategyEnum string

const (
	BatchGetAmpUrlsRequestLookupStrategyEnumFetchLiveDoc BatchGetAmpUrlsRequestLookupStrategyEnum = "FETCH_LIVE_DOC"
	BatchGetAmpUrlsRequestLookupStrategyEnumInIndexDoc   BatchGetAmpUrlsRequestLookupStrategyEnum = "IN_INDEX_DOC"
)

// BatchGetAmpUrlsRequest
// AMP URL request for a batch of URLs.
type BatchGetAmpUrlsRequest struct {
	LookupStrategy *BatchGetAmpUrlsRequestLookupStrategyEnum `json:"lookupStrategy,omitempty"`
	Urls           []string                                  `json:"urls,omitempty"`
}
