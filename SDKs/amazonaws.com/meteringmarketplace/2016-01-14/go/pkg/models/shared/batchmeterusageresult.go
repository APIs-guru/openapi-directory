package shared

type BatchMeterUsageResult struct {
	Results            []UsageRecordResult `json:"Results"`
	UnprocessedRecords []UsageRecord       `json:"UnprocessedRecords"`
}
