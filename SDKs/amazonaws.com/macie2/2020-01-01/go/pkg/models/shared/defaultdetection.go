package shared

// DefaultDetection
// Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
type DefaultDetection struct {
	Count       *int64       `json:"count,omitempty"`
	Occurrences *Occurrences `json:"occurrences,omitempty"`
	Type        *string      `json:"type,omitempty"`
}
