package shared

// BatchMeterUsageResult
// Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
type BatchMeterUsageResult struct {
	Results            []UsageRecordResult `json:"Results,omitempty"`
	UnprocessedRecords []UsageRecord       `json:"UnprocessedRecords,omitempty"`
}
