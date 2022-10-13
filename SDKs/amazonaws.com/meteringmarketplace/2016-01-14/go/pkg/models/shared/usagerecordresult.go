package shared

type UsageRecordResult struct {
	MeteringRecordID *string                      `json:"MeteringRecordId"`
	Status           *UsageRecordResultStatusEnum `json:"Status"`
	UsageRecord      *UsageRecord                 `json:"UsageRecord"`
}
