package shared

// Recommendation
// A recommendation on how to remediate the issue identified in a finding.
type Recommendation struct {
	Text *string `json:"Text,omitempty"`
	URL  *string `json:"Url,omitempty"`
}
