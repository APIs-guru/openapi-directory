package shared

type APICoreDtoAggregatedAggregatedSummaryResult struct {
	Count  *int64                                 `json:"count,omitempty"`
	Limit  *int32                                 `json:"limit,omitempty"`
	Offset *int64                                 `json:"offset,omitempty"`
	Result []APICoreDtoAggregatedAggregatedResult `json:"result,omitempty"`
}
