package shared

// UsageRecordResult
// A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
type UsageRecordResult struct {
	MeteringRecordID *string                      `json:"MeteringRecordId,omitempty"`
	Status           *UsageRecordResultStatusEnum `json:"Status,omitempty"`
	UsageRecord      *UsageRecord                 `json:"UsageRecord,omitempty"`
}
