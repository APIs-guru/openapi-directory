package shared

// ClassificationStatus
// Provides details about the current status of the sensitive data detection.
type ClassificationStatus struct {
	Code   *string `json:"Code,omitempty"`
	Reason *string `json:"Reason,omitempty"`
}
