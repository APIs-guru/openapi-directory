package shared

// SeveritySummary
// The number of managed instances found for each patch severity level defined in the request filter.
type SeveritySummary struct {
	CriticalCount      *int64 `json:"CriticalCount,omitempty"`
	HighCount          *int64 `json:"HighCount,omitempty"`
	InformationalCount *int64 `json:"InformationalCount,omitempty"`
	LowCount           *int64 `json:"LowCount,omitempty"`
	MediumCount        *int64 `json:"MediumCount,omitempty"`
	UnspecifiedCount   *int64 `json:"UnspecifiedCount,omitempty"`
}
