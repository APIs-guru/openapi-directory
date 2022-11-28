package shared

// Severity
// Provides the numerical and qualitative representations of a finding's severity.
type Severity struct {
	Description *SeverityDescriptionEnum `json:"description,omitempty"`
	Score       *int64                   `json:"score,omitempty"`
}
