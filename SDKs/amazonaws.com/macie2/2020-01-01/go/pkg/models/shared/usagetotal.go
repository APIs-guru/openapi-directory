package shared

// UsageTotal
// Provides aggregated data for an Amazon Macie usage metric. The value for the metric reports estimated usage data for an account for the preceding 30 days or the current calendar month to date, depending on the time period (timeRange) specified in the request.
type UsageTotal struct {
	Currency      *CurrencyEnum  `json:"currency,omitempty"`
	EstimatedCost *string        `json:"estimatedCost,omitempty"`
	Type          *UsageTypeEnum `json:"type,omitempty"`
}
