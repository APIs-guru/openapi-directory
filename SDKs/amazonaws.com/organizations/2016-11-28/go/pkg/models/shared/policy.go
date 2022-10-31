package shared

type Policy struct {
	Content       *string        `json:"Content,omitempty"`
	PolicySummary *PolicySummary `json:"PolicySummary,omitempty"`
}
