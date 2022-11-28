package shared

// Terms
// The terms for the event, provided in a full-text description and summary.
type Terms struct {
	FullText *string `json:"fullText,omitempty"`
	Summary  *string `json:"summary,omitempty"`
}
