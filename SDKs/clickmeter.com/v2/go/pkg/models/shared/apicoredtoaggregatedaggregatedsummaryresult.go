package shared

type APICoreDtoAggregatedAggregatedSummaryResult struct {
	Count  *int64                                 `json:"count"`
	Limit  *int32                                 `json:"limit"`
	Offset *int64                                 `json:"offset"`
	Result []APICoreDtoAggregatedAggregatedResult `json:"result"`
}
