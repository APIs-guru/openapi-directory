package shared

// ClassificationResultStatus
// Provides information about the status of a sensitive data finding.
type ClassificationResultStatus struct {
	Code   *string `json:"code,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
