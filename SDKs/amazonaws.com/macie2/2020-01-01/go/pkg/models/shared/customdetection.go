package shared

// CustomDetection
// Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
type CustomDetection struct {
	Arn         *string      `json:"arn,omitempty"`
	Count       *int64       `json:"count,omitempty"`
	Name        *string      `json:"name,omitempty"`
	Occurrences *Occurrences `json:"occurrences,omitempty"`
}
