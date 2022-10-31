package shared



type BatchMeterUsageResult struct {
    Results []UsageRecordResult `json:"Results,omitempty"`
    UnprocessedRecords []UsageRecord `json:"UnprocessedRecords,omitempty"`
    
}

