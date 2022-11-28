package shared

// Note
// A user-defined note added to a finding.
type Note struct {
	Text      string `json:"Text"`
	UpdatedAt string `json:"UpdatedAt"`
	UpdatedBy string `json:"UpdatedBy"`
}
