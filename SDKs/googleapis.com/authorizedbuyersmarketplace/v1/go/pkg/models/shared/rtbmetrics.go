package shared

type RtbMetrics struct {
	AdImpressions7Days      *string  `json:"adImpressions7Days"`
	BidRate7Days            *float64 `json:"bidRate7Days"`
	BidRequests7Days        *string  `json:"bidRequests7Days"`
	Bids7Days               *string  `json:"bids7Days"`
	FilteredBidRate7Days    *float64 `json:"filteredBidRate7Days"`
	MustBidRateCurrentMonth *float64 `json:"mustBidRateCurrentMonth"`
}
