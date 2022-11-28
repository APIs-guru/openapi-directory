package shared

// ServiceLimit
// Specifies a current quota for an Amazon Macie account.
type ServiceLimit struct {
	IsServiceLimited *bool     `json:"isServiceLimited,omitempty"`
	Unit             *UnitEnum `json:"unit,omitempty"`
	Value            *int64    `json:"value,omitempty"`
}
