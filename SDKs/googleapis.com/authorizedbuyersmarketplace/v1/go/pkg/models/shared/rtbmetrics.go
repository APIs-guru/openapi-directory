package shared



type RtbMetrics struct {
    AdImpressions7Days *string `json:"adImpressions7Days,omitempty"`
    BidRate7Days *float64 `json:"bidRate7Days,omitempty"`
    BidRequests7Days *string `json:"bidRequests7Days,omitempty"`
    Bids7Days *string `json:"bids7Days,omitempty"`
    FilteredBidRate7Days *float64 `json:"filteredBidRate7Days,omitempty"`
    MustBidRateCurrentMonth *float64 `json:"mustBidRateCurrentMonth,omitempty"`
    
}

