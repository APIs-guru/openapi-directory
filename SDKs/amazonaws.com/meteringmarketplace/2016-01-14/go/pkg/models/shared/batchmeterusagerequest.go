package shared

type BatchMeterUsageRequest struct {
	ProductCode  string        `json:"ProductCode"`
	UsageRecords []UsageRecord `json:"UsageRecords"`
}
