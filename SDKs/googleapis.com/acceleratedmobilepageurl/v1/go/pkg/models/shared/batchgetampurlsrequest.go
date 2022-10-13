package shared

type BatchGetAmpUrlsRequestLookupStrategyEnum string

const (
	BatchGetAmpUrlsRequestLookupStrategyEnumFetchLiveDoc BatchGetAmpUrlsRequestLookupStrategyEnum = "FETCH_LIVE_DOC"
	BatchGetAmpUrlsRequestLookupStrategyEnumInIndexDoc   BatchGetAmpUrlsRequestLookupStrategyEnum = "IN_INDEX_DOC"
)

type BatchGetAmpUrlsRequest struct {
	LookupStrategy *BatchGetAmpUrlsRequestLookupStrategyEnum `json:"lookupStrategy"`
	Urls           []string                                  `json:"urls"`
}
