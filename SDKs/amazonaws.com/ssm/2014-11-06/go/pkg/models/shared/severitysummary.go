package shared

type SeveritySummary struct {
	CriticalCount      *int64 `json:"CriticalCount"`
	HighCount          *int64 `json:"HighCount"`
	InformationalCount *int64 `json:"InformationalCount"`
	LowCount           *int64 `json:"LowCount"`
	MediumCount        *int64 `json:"MediumCount"`
	UnspecifiedCount   *int64 `json:"UnspecifiedCount"`
}
