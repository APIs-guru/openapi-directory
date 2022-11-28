package shared

// DescribeSeverityLevelsResponse
// The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
type DescribeSeverityLevelsResponse struct {
	SeverityLevels []SeverityLevel `json:"severityLevels,omitempty"`
}
