package shared

type PerformanceReport struct {
	BidRate                 *float64      `json:"bidRate"`
	BidRequestRate          *float64      `json:"bidRequestRate"`
	CalloutStatusRate       []interface{} `json:"calloutStatusRate"`
	CookieMatcherStatusRate []interface{} `json:"cookieMatcherStatusRate"`
	CreativeStatusRate      []interface{} `json:"creativeStatusRate"`
	FilteredBidRate         *float64      `json:"filteredBidRate"`
	HostedMatchStatusRate   []interface{} `json:"hostedMatchStatusRate"`
	InventoryMatchRate      *float64      `json:"inventoryMatchRate"`
	Kind                    *string       `json:"kind"`
	Latency50thPercentile   *float64      `json:"latency50thPercentile"`
	Latency85thPercentile   *float64      `json:"latency85thPercentile"`
	Latency95thPercentile   *float64      `json:"latency95thPercentile"`
	NoQuotaInRegion         *float64      `json:"noQuotaInRegion"`
	OutOfQuota              *float64      `json:"outOfQuota"`
	PixelMatchRequests      *float64      `json:"pixelMatchRequests"`
	PixelMatchResponses     *float64      `json:"pixelMatchResponses"`
	QuotaConfiguredLimit    *float64      `json:"quotaConfiguredLimit"`
	QuotaThrottledLimit     *float64      `json:"quotaThrottledLimit"`
	Region                  *string       `json:"region"`
	SuccessfulRequestRate   *float64      `json:"successfulRequestRate"`
	Timestamp               *string       `json:"timestamp"`
	UnsuccessfulRequestRate *float64      `json:"unsuccessfulRequestRate"`
}
