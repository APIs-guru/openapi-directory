package shared

// BatchMeterUsageRequest
// A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
type BatchMeterUsageRequest struct {
	ProductCode  string        `json:"ProductCode"`
	UsageRecords []UsageRecord `json:"UsageRecords"`
}
