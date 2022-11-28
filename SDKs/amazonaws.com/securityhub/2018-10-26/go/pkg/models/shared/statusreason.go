package shared

// StatusReason
// Provides additional context for the value of <code>Compliance.Status</code>.
type StatusReason struct {
	Description *string `json:"Description,omitempty"`
	ReasonCode  string  `json:"ReasonCode"`
}
