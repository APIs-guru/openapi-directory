package shared

// RtbMetrics
// Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
type RtbMetrics struct {
	AdImpressions7Days      *string  `json:"adImpressions7Days,omitempty"`
	BidRate7Days            *float64 `json:"bidRate7Days,omitempty"`
	BidRequests7Days        *string  `json:"bidRequests7Days,omitempty"`
	Bids7Days               *string  `json:"bids7Days,omitempty"`
	FilteredBidRate7Days    *float64 `json:"filteredBidRate7Days,omitempty"`
	MustBidRateCurrentMonth *float64 `json:"mustBidRateCurrentMonth,omitempty"`
}
