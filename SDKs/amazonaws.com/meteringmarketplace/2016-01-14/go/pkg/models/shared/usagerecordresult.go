package shared



type UsageRecordResult struct {
    MeteringRecordID *string `json:"MeteringRecordId,omitempty"`
    Status *UsageRecordResultStatusEnum `json:"Status,omitempty"`
    UsageRecord *UsageRecord `json:"UsageRecord,omitempty"`
    
}

