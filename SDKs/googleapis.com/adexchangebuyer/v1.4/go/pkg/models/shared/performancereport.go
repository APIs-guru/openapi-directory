package shared

type PerformanceReport struct {
	BidRate                 *float64      `json:"bidRate,omitempty"`
	BidRequestRate          *float64      `json:"bidRequestRate,omitempty"`
	CalloutStatusRate       []interface{} `json:"calloutStatusRate,omitempty"`
	CookieMatcherStatusRate []interface{} `json:"cookieMatcherStatusRate,omitempty"`
	CreativeStatusRate      []interface{} `json:"creativeStatusRate,omitempty"`
	FilteredBidRate         *float64      `json:"filteredBidRate,omitempty"`
	HostedMatchStatusRate   []interface{} `json:"hostedMatchStatusRate,omitempty"`
	InventoryMatchRate      *float64      `json:"inventoryMatchRate,omitempty"`
	Kind                    *string       `json:"kind,omitempty"`
	Latency50thPercentile   *float64      `json:"latency50thPercentile,omitempty"`
	Latency85thPercentile   *float64      `json:"latency85thPercentile,omitempty"`
	Latency95thPercentile   *float64      `json:"latency95thPercentile,omitempty"`
	NoQuotaInRegion         *float64      `json:"noQuotaInRegion,omitempty"`
	OutOfQuota              *float64      `json:"outOfQuota,omitempty"`
	PixelMatchRequests      *float64      `json:"pixelMatchRequests,omitempty"`
	PixelMatchResponses     *float64      `json:"pixelMatchResponses,omitempty"`
	QuotaConfiguredLimit    *float64      `json:"quotaConfiguredLimit,omitempty"`
	QuotaThrottledLimit     *float64      `json:"quotaThrottledLimit,omitempty"`
	Region                  *string       `json:"region,omitempty"`
	SuccessfulRequestRate   *float64      `json:"successfulRequestRate,omitempty"`
	Timestamp               *string       `json:"timestamp,omitempty"`
	UnsuccessfulRequestRate *float64      `json:"unsuccessfulRequestRate,omitempty"`
}
